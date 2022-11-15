import {Appbar} from 'react-native-paper';

export default function CustomNavigationBar({navigation, options, back}) {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          accessibilityLabel="Back"
        />
      ) : null}
      <Appbar.Content title={options.title} />
      <Appbar.Action
        icon="menu"
        accessibilityLabel="Menu"
        onPress={navigation.toggleDrawer}
      />
    </Appbar.Header>
  );
}