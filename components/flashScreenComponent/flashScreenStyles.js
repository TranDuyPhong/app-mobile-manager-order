import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 10
    },
    title: {
        color: '#ffffff',
        fontFamily: 'Tahoma Regular font',
        fontSize: 22,
        textAlign: 'center'
    },
    threeRestaurant: {
        width: '100%',
        marginVertical: 40,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    hotline: {
        marginTop: 10,
        alignSelf: 'center',
        position: 'absolute',
        color: '#ffffff',
        fontFamily: 'Tahoma Regular font'
    }
});

export default styles;