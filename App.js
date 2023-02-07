import Home from "./src/pages/Home";
import Launch from "./src/pages/Launch";
import LaunchBtns from "./src/pages/LaunchBtns";
import styles from './src/assets/css/MainStyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={styles.main}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Launch" component={Launch} />
          <Stack.Screen name="LaunchBtns" component={LaunchBtns} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
