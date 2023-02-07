import {View, Text} from 'react-native';
import styles from '../assets/css/MainStyle';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer.js';
import Methods from '../Components/Methods.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Home({navigation}) {
  return (
    <SafeAreaProvider style={styles.main}>
      <Navbar />
      <Methods rnNavigate={navigation} />
      <Footer /> 
    </SafeAreaProvider>
  );
}
