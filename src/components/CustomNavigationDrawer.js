import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';

export default function CustomNavigationDrawer(props) {
  const {state, navigation} = props;

  const isSelected = index => index === state.index;

  return (
    <DrawerContentScrollView {...props}>
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
