import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';


export default function ThemeLayout({ children }: { children: React.ReactNode }) {
    const colorScheme = useColorScheme();

    const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

    return (
        <ThemeProvider value={theme}>
            {children}
        </ThemeProvider>
    );
}