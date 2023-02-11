import { Text, View, Image } from 'react-native';
import styles from '../assets/css/FooterStyle';
import packageInfo from '../../package.json';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={{color: '#e8f1f2'}}>Developed by <Image style={styles.footerImage} source={require('../assets/main-logo.png')} /></Text>
            <Text style={styles.version}>Versão {packageInfo.version}</Text>
        </View>
    )
}