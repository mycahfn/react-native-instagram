import { ThemedText } from "@/components/shared/ThemedText";
import ThemeLayout from "@/components/ThemeLayout";
import { useThemeColor } from '@/hooks/use-theme-color';
import { useAuthStore } from '@/utils/authStore';

import { Stack } from "expo-router";
import { View } from "react-native";

export const unstable_settings = {
  anchor: '(tabs)',
};



export default function RootLayout() {

  const backgroundColor = useThemeColor({}, 'background');
  const { isLoggedIn, userData } = useAuthStore()
  
  console.log(userData)

  return (
    <ThemeLayout>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            contentStyle: { backgroundColor }
          }}
        />
        <Stack.Screen name="notifications" options={{ headerShown: false }} />
        <Stack.Screen 
          name="add" 
          options={{ 
            title: "Nueva publicación",
            headerRight: () => (<View><ThemedText>Siguiente</ThemedText></View>)
          }} 
    
          />
        <Stack.Screen name="configuration" options={{ title: "Configuración y Actividad", headerShown: false }} />
      </Stack.Protected>
    </ThemeLayout>
  );
}
