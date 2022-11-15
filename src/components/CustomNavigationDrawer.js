import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer, useTheme} from 'react-native-paper';

export default function CustomNavigationDrawer(props) {
  const {state, navigation} = props;
  const theme = useTheme();

  const scrollViewStyle = {
    backgroundColor: theme.colors.background,
  };

  const isSelected = index => index === state.index;

  return (
    <DrawerContentScrollView style={scrollViewStyle} {...props}>
      {state.routes.map((route, index) => (
        <Drawer.Item
          key={route.key}
          label={route.name}
          accessibilityLabel={route.name}
          active={isSelected(index)}
          onPress={() => navigation.navigate(route.name)}
        />
      ))}
    </DrawerContentScrollView>
  );
}
