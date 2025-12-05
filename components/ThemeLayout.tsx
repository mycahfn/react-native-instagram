import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';



export default function ThemeLayout({ children }: { children: React.ReactNode }) {
    const colorScheme = useColorScheme();

    const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

    return (
        <PaperProvider>
            <ThemeProvider value={theme}>
                {children}
            </ThemeProvider>
        </PaperProvider>
    );
}