import {StatusBar} from 'expo-status-bar';
import Navigation from './src/Navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import useCustomTheme from './src/useCustomTheme';

export default function App() {
  const theme = useCustomTheme();

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <Navigation />
    </PaperProvider>
  );
}
