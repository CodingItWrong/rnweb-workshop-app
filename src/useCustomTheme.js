import {useColorScheme} from 'react-native';
import {MD2DarkTheme, MD2LightTheme} from 'react-native-paper';

export default function useCustomTheme() {
  const colorScheme = useColorScheme() ?? 'light';
  const baseTheme = colorScheme === 'dark' ? MD2DarkTheme : MD2LightTheme;
  return baseTheme;
}
