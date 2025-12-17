import ThemeLayout from "@/components/ThemeLayout";
import { useThemeColor } from '@/hooks/use-theme-color';

import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  const backgroundColor = useThemeColor({}, 'background');
  
  return (
    <ThemeLayout>
       <Stack.Protected guard={false}>
          <Stack.Screen 
            name="(tabs)" 
            options={{ 
              headerShown: false,
              contentStyle: { backgroundColor }
            }} 
            />
          
        </Stack.Protected>
        <Stack.Protected guard={true}>
          <Stack.Screen name="auth" options={{ headerShown: false }} />
          <Stack.Screen name="notifications" options={{ headerShown: false }} />
        </Stack.Protected>
        <StatusBar style="auto" />
    </ThemeLayout>
  );
}
