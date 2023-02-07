import { Text, View } from "react-native";
import { Button, TouchableRipple } from "react-native-paper";
import styles from '../assets/css/MainStyle.js';
import Title from './Title';

export default function Methods(props) {
  return (
    <View>
      <Title icon='ios-home' title='Home' />
      <View style={styles.buttonArea}>
        <Button icon='rocket-launch' style={styles.button} mode="outlined" onPress={() => props.rnNavigate.navigate('Launch', {method: 'singleLaunch'})} textColor='#d9d9d9'>
          Lançamento Único
        </Button>

        <Button icon='rocket-launch' style={styles.button} mode="outlined" onPress={() => props.rnNavigate.navigate('Launch', {method: 'multiLaunch'})} textColor='#d9d9d9'>
          Lançamento Múltiplo
        </Button>
      </View>
    </View>
  )
}