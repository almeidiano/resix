import { Image } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Navbar(props) {
  return (
    // Put the back press icon if isn't the homepage
    <Appbar.Header style={{backgroundColor: '#19719a'}}> 
      {props.backAction && <Appbar.BackAction color='#e8f1f2' onPress={() => {props.rnNavigate.goBack()}} />}
      <Appbar.Content title={<Image style={{height: 100, width: 100, resizeMode: 'contain'}} source={require('../assets/logo.png')} />} />
      <Appbar.Action color='#e8f1f2' icon="menu" />
    </Appbar.Header>
  )
}
