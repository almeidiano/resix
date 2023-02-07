import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#1d84b5'
    },
    container: {
      width: '95%',
      margin: 'auto'
    },
    emphasis: {
      color: '#e8f1f2'
    },
    title: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 15
    },
    titleText: {
      color: '#d9d9d9',
      marginLeft: 5,
      fontWeight: 'bold'
    },
    buttonArea: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    button: {
      borderColor: '#d9d9d9', 
      margin: 10, 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center'
    },
    intButtonText: {
      paddingTop: 10,
      whiteSpace: 'break-spaces',
      fontSize: 12
    },
    inputArea: {
      top: -50,
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textInput: {
      width: '95%', 
      backgroundColor: '#1d84b5', 
      placeholder: '#e8f1f2', 
      marginBottom: 10
    },
    launchBtnArea: {
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      padding: 10, 
      borderBottomColor: '#c1c1c1', 
      borderBottomWidth: 1
    },
    launchPin: {
      display: 'flex', 
      flexDirection: 'row', 
      alignItems: 'center'
    }
});

export default styles;