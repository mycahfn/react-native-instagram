import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'username' | 'subtitle' | 'link' | 'metadata' | 'description' | "metadata_1";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'username' ? styles.defaultSemiBold : undefined,
        type === 'metadata' ? styles.defaultSemiBold : undefined,
        type === 'metadata_1' ? styles.metadata_1 : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'description' ? styles.description : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 600,
  },
  description: {
    fontSize: 14,
    lineHeight: 18
  },
  metadata_1: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 400
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 400
  },
  link: {
    lineHeight: 18,
    fontSize: 14,
    color: 'rgb(168, 168, 168)',
  },
});
