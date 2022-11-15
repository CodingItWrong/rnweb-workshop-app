import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomNavigationDrawer from './components/CustomNavigationDrawer';
import CustomNavigationBar from './components/CustomNavigationBar';
import ScreenBackground from './components/ScreenBackground';
import CenterColumn from './components/CenterColumn';
import ButtonGroup from './components/ButtonGroup';
import {screenWidthMin, useStyleQueries} from 'react-native-style-queries';
import {breakpointMedium, large, useBreakpoint} from './breakpoints';

const linking = {
  config: {
    screens: {
      Home: {
        path: '/',
        initialRouteName: 'HomeRoot',
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
  const styles = useStyleQueries(styleQueries);
  return (
    <ScreenBackground>
      <CenterColumn>
        <Text>HomeRoot</Text>
        <ButtonGroup>
          <Button mode="outlined" style={styles.button}>
            Second
          </Button>
          <Button mode="outlined" style={styles.button}>
            Third
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('HomeDetail')}
            style={styles.button}
          >
            Go to Detail
          </Button>
        </ButtonGroup>
      </CenterColumn>
    </ScreenBackground>
  );
}

function HomeDetail() {
  const navigation = useNavigation();
  return (
    <ScreenBackground>
      <CenterColumn>
        <Text>HomeDetail</Text>
        <Pressable onPress={() => navigation.pop()}>
          <Text>Back to HomeRoot</Text>
        </Pressable>
      </CenterColumn>
    </ScreenBackground>
  );
}

function OtherRoot() {
  return (
    <ScreenBackground>
      <CenterColumn>
        <Text>OtherRoot</Text>
      </CenterColumn>
    </ScreenBackground>
  );
}

const HomeStack = createNativeStackNavigator();
function Home() {
  return (
    <HomeStack.Navigator screenOptions={{header: CustomNavigationBar}}>
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
    <OtherStack.Navigator screenOptions={{header: CustomNavigationBar}}>
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
  const breakpoint = useBreakpoint();
  const drawerType = breakpoint === large ? 'permanent' : 'back';

  return (
    <Drawer.Navigator
      drawerContent={CustomNavigationDrawer}
      screenOptions={{
        headerShown: false,
        drawerType,
      }}
    >
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

const styleQueries = {
  button: [
    {
      marginTop: 10,
    },
    screenWidthMin(breakpointMedium, {
      marginLeft: 10,
    }),
  ],
};
