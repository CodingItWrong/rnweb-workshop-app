import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Pressable, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const linking = {
  config: {
    screens: {
      Home: {
        path: '/',
        screens: {
          HomeRoot: '',
          HomeDetail: 'home/detail',
        },
      },
      Other: {
        path: '/other',
        screens: {
          OtherRoot: '',
        },
      },
    },
  },
};

function HomeRoot() {
  const navigation = useNavigation();
  return (
    <>
      <Text>HomeRoot</Text>
      <Pressable onPress={() => navigation.navigate('HomeDetail')}>
        <Text>Go to Detail</Text>
      </Pressable>
    </>
  );
}

function HomeDetail() {
  const navigation = useNavigation();
  return (
    <>
      <Text>HomeDetail</Text>
      <Pressable onPress={() => navigation.pop()}>
        <Text>Back to HomeRoot</Text>
      </Pressable>
    </>
  );
}

function OtherRoot() {
  return <Text>OtherRoot</Text>;
}

const HomeStack = createNativeStackNavigator();
function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeRoot"
        component={HomeRoot}
        options={{title: 'Home'}}
      />
      <HomeStack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={{title: 'Home Detail'}}
      />
    </HomeStack.Navigator>
  );
}

const OtherStack = createNativeStackNavigator();
function Other() {
  return (
    <OtherStack.Navigator>
      <OtherStack.Screen
        name="OtherRoot"
        component={OtherRoot}
        options={{title: 'Other'}}
      />
    </OtherStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function NavigationContents() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Other" component={Other} />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  // IMPORTANT: NavigationContainer needs to not rerender too often or
  // else Safari and Firefox error on too many history API calls. Put
  // any hooks in NavigationContents so this parent doesn't rerender.
  return (
    <NavigationContainer linking={linking}>
      <NavigationContents />
    </NavigationContainer>
  );
}
