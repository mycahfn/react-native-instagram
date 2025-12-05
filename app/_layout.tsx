import ThemeLayout from "@/components/ThemeLayout";
import { Stack } from "expo-router";


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <ThemeLayout>
      <Stack>
        <Stack.Protected guard={false}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={true}>
          <Stack.Screen name="auth" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </ThemeLayout>
  );
}
