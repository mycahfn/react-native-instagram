import { ThemedText } from '@/components/shared/ThemedText';
import { FlashList } from "@shopify/flash-list"; // 1. Importar FlashList
import * as MediaLibrary from 'expo-media-library';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


const GAP = 2;
const COLUMNS = 4;
const SCREEN_WIDTH = Dimensions.get("window").width;
// Tamaño exacto de cada celda
const ITEM_SIZE = (SCREEN_WIDTH - (GAP * (COLUMNS - 1))) / COLUMNS;

export default function GalleryScreen() {
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const [assets, setAssets] = useState<MediaLibrary.Asset[]>([]);

  // 2. Estado para Selección Múltiple (Usamos Set para rendimiento O(1))
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Paginación
  const [endCursor, setEndCursor] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(true);

  // --- Lógica de Carga ---
  const loadImages = async () => {
    

    if (!permissionResponse?.granted) {
      const result = await requestPermission();
      if (!result.granted) return;
    }

    if (!hasNextPage) return;

    const fetchedAssets = await MediaLibrary.getAssetsAsync({
      first: 50, // Lotes más grandes gracias a FlashList
      sortBy: [[MediaLibrary.SortBy.creationTime, false]],
      mediaType: 'photo',
      after: endCursor || undefined,
    });

    setAssets(prev => [...prev, ...fetchedAssets.assets]);
    setEndCursor(fetchedAssets.endCursor);
    setHasNextPage(fetchedAssets.hasNextPage);
  };

  useEffect(() => {
    loadImages();
  }, [permissionResponse]);

  // --- Lógica de Selección ---
  const toggleSelection = useCallback((id: string) => {
    setSelectedIds(prevSet => {
      // 1. Crear una copia del Set anterior (prevSet)
      const newSet = new Set(prevSet);

      // 2. Modificar la copia
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }

      // 3. Devolver la nueva copia para actualizar el estado
      return newSet;
    });
  }, []); //

  // --- Componente de Item (Memoizado para evitar re-renders masivos) ---
  const ImageItem = useCallback(({ item, extraData }: any) => {
    // extraData aquí es el Set de IDs. Verificamos si este item está en el Set.
    const isSelected = extraData.has(item.id);

    return (
      <TouchableOpacity
        onPress={() => toggleSelection(item.id)}
        activeOpacity={0.7}
        style={{
          height: ITEM_SIZE,
          width: ITEM_SIZE,
          marginBottom: GAP,
          marginRight: GAP // FlashList maneja márgenes diferente, simple es mejor
        }}
      >
        <Image
          source={{ uri: item.uri }}
          style={[
            styles.image,
            isSelected && styles.selectedImage // Estilo si está seleccionado
          ]}
          resizeMethod="resize" // Vital para Android
        />
        {isSelected && (
          <View style={styles.checkIcon}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>✓</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }, []);

  // --- Header (Imagen Principal) ---
  const ListHeader = useMemo(() => {
    // Lógica: Mostrar la última seleccionada, o la primera de la lista si no hay selección
    let previewUri = assets.length > 0 ? assets[0].uri : null;

    // Si hay selección, buscamos la última foto seleccionada para mostrarla
    if (selectedIds.size > 0) {
      // (Esta búsqueda es simple, para apps complejas se puede optimizar manteniendo un estado 'lastSelected')
      const lastSelectedId = Array.from(selectedIds).pop();
      const found = assets.find(a => a.id === lastSelectedId);
      if (found) previewUri = found.uri;
    }

    return (
      <View>
        <View style={styles.previewContainer}>
          {previewUri && (
            <Image
              source={{ uri: previewUri }}
              style={styles.previewImage}
              resizeMode="contain"
            />
          )}
        </View>
        <View style={styles.infoBar}>
          <ThemedText style={{fontWeight: 600, fontSize: 18, marginVertical: 8}}>
            Reciente
          </ThemedText>
        </View>
      </View>
    );
  }, [selectedIds, assets]); // Se recalcula cuando cambia la selección o cargan fotos

  return (
    <View style={styles.container}>
      <FlashList<MediaLibrary.Asset>
        data={assets}
        renderItem={({ item }) => <ImageItem item={item} extraData={selectedIds} />}

        // 3. Propiedades CLAVE de FlashList
        numColumns={COLUMNS}
        extraData={selectedIds} // Fuerza a la lista a actualizarse cuando cambia la selección

        ListHeaderComponent={ListHeader}
        onEndReached={loadImages}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Fondo oscuro suele verse mejor en galerías
  },
  previewContainer: {
    height: 300,
    width: '100%',
    backgroundColor: '#1a1a1a',
    marginBottom: 10,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  infoBar: {
    paddingHorizontal: 12,
    paddingBottom: 10,
  },
  image: {
    flex: 1,
    borderRadius: 0,
  },
  selectedImage: {
    opacity: 0.5, // Oscurecer un poco para destacar el check
    borderWidth: 2,
    borderColor: '#00D100',
  },
  checkIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#00D100',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white'
  }
});