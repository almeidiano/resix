import { View, Text } from "react-native"
import styles from "../assets/css/MainStyle"
import Icon from 'react-native-vector-icons/Ionicons';

export default function Title(props) {
  return (
    <View style={styles.title}>
        <Icon color='#d9d9d9' name={props.icon} size={20} />
        <Text style={styles.titleText}>{props.title}</Text>
    </View>
  )
}