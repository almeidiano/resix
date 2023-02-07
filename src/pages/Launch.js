import {View, Alert, Text} from 'react-native';
import styles from '../assets/css/MainStyle';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from '../Components/Title';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';

export default function Launch({route, navigation}) {
  const launchMethod = route.params.method;  

  const showAlert = (result) => {
    Alert.alert(
      'Mensagem',
      result == 'invalid' ? 'Link inválido' : result ? 'Lançado com sucesso!' : 'Ocorreu um erro',  
      [
        {
          text: 'Ok'
        },
      ],
      {
        cancelable: true
      },
    );
  }

  const [value, setValue] = useState('');

  const fetchUrl = async (value) => {
    const data = {
      almeidianoProject: 'resix',
      launchMethod: launchMethod 
    }

    if(launchMethod == 'singleLaunch') {
      try {
        let req = await fetch(value, {
          method: 'POST',
          body: JSON.stringify(data)
        })
    
        let res = await req.json();
  
        !res.result.error ? showAlert(true) : showAlert(false);
      } catch (error) {
        showAlert('invalid')
      }
    }else {
      try {
        let req = await fetch(value, {
          method: 'POST',
          body: JSON.stringify(data)
        })
    
        let res = await req.json();
  
        !res.result.error && navigation.navigate('LaunchBtns')
      } catch (error) {
        showAlert('invalid')
      }
    }
  }

  return (
    <SafeAreaProvider style={styles.main}>
          <Navbar backAction rnNavigate={navigation} />
          <Title icon='ios-rocket' title={launchMethod == 'singleLaunch' ? 'Lançamento Único' : 'Lançamento Múltiplo'} />
          <View style={styles.inputArea}>
              <TextInput
                mode='outlined'
                placeholder="Digite o link de conexão..."
                outlineColor='#e8f1f2'
                value={value}
                onChangeText={newValue => setValue(newValue)}
                activeOutlineColor='#e8f1f2'
                textColor='#e8f1f2'
                placeholderTextColor='#e8f1f2'
                style={styles.textInput}
              />
            <Button mode="contained" buttonColor='#19719a' onPress={() => fetchUrl(value)}>
              {launchMethod == 'singleLaunch' ? 'Lançar' : 'Conectar'}
            </Button>
            </View>
        <Footer />
    </SafeAreaProvider>
  );
}
