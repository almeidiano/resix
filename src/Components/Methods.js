import { View, Alert } from "react-native";
import { Button, TouchableRipple } from "react-native-paper";
import styles from '../assets/css/MainStyle.js';
import Title from './Title';

export default function Methods(props) {
  Alert.alert(
    'Aviso',
    'O uso deste projeto é por sua conta e risco. O desenvolvedor e o proprietário deste aplicativo não fazem representações ou garantias de qualquer tipo sobre o mau uso contido no aplicativo ou no código-fonte para qualquer finalidade. O usuário que estiver utilizando o aplicativo ou alterando o código-fonte para qualquer finalidade será responsável, seja qual for decorrente de mau uso. Qualquer confiança que você deposite nesse uso é, portanto, estritamente por sua conta e risco.',
    [
      {
        text: 'Estou ciente'
      },
    ],
    {
      cancelable: false
    },
  );
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