import { StyleSheet, Dimensions } from 'react-native';

const maxWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#ffffff', 
        paddingLeft: 10, 
        paddingRight: 10, 
        paddingTop: 10
    },
    pickerCategories: {
        height: 40
    },
    pickerPrices: {
        marginVertical: 10,
        height: 40
    },
    foodItem: {
        width: '100%',
        height: 220,
        backgroundColor: '#446CB3',
        borderRadius: 5,
        marginBottom: 10,
        elevation: 2,
        padding: 10
    },
    imageFood: {
        flex: 3,
        resizeMode: 'stretch',
        borderRadius: 2
    },
    infoFood: {
        flex: 1,
        flexDirection: 'row',
    },
    nameFood: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceFood: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNameFood: {
        color: '#ffffff',
        fontSize: 15,
        fontFamily: 'Tahoma Regular font'
    },
    textPriceFood: {
        color: '#ffffff',
        fontSize: 15,
        fontFamily: 'Tahoma Regular font'
    },
    textPriceThrough: {
        textDecorationLine: 'line-through',
        marginBottom: 5
    }
});

export default styles;