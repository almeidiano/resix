import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#19719a',
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'   
    },
    footerImage: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        top: 4,
        paddingLeft: 3
    },
    version: {
        color: '#e8f1f2', 
        position: 'absolute', 
        right: 0, 
        bottom: 0
    }
})

export default styles;