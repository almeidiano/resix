import {View, Text, Switch, Alert} from 'react-native';
import styles from '../assets/css/MainStyle';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Button } from 'react-native-paper';

export default function LaunchBtns({navigation}) {
    const showAlert = (pin) => {
        Alert.alert(
        'Mensagem',
        `Canal ${pin} lançado!`,
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

    const ToggleArea = () => {
        const buttons = [];

        for(let i = 1; i < 9; i++) {
            // Creating state to single element being pushed to button array
            const [isSwitchOn, setIsSwitchOn] = useState(false);

            buttons.push(
                <View key={i} style={styles.launchBtnArea}>
                    <View style={styles.launchPin}>
                        <Text style={{color: '#d9d9d9', paddingRight: 5}}>{i}</Text>
                        <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)} />
                    </View>
                
                    {isSwitchOn ? <Button mode="contained" buttonColor='#19719a' onPress={() => showAlert(i)}>Lançar</Button> : <Button disabled mode="contained" buttonColor='#19719a'>Lançar</Button>}
                </View>
            )
        }

        return (
            <>
                {buttons}
            </>
        )
    }

    return (
        <SafeAreaProvider style={styles.main}>
            <Navbar backAction rnNavigate={navigation} />
            <ToggleArea />
            <Footer />
        </SafeAreaProvider>
    );
}
