import {StatusBar} from 'expo-status-bar';
import Navigation from './src/Navigation';
import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Navigation />
    </PaperProvider>
  );
}
