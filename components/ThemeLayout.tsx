import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

import { Stack } from 'expo-router';


export default function ThemeLayout({ children }: { children: React.ReactNode }) {
    const colorScheme = useColorScheme();

    const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

    return (
        <PaperProvider>
            <ThemeProvider value={theme}>
                <Stack screenOptions={{
                    headerShown: false 
                }}>
                    {children}
                </Stack>
            </ThemeProvider>
        </PaperProvider>
    );
}