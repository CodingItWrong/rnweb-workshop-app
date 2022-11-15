import {useColorScheme} from 'react-native';
import {MD2DarkTheme, MD2LightTheme} from 'react-native-paper';

const THEME_COLOR = '#4caf50';

export default function useCustomTheme() {
  const colorScheme = useColorScheme() ?? 'light';
  const baseTheme = colorScheme === 'dark' ? MD2DarkTheme : MD2LightTheme;

  const theme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: THEME_COLOR,
    },
  };

  return theme;
}
