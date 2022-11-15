import {View} from 'react-native';
import {useTheme} from 'react-native-paper';

export default function ScreenBackground({style, children}) {
  const theme = useTheme();
  const baseStyle = {flex: 1, backgroundColor: theme.colors.background};
  return <View style={[baseStyle, style]}>{children}</View>;
}
