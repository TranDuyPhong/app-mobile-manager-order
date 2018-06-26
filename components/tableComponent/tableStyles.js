import { StyleSheet, Dimensions } from 'react-native';

const maxWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#ffffff', 
        paddingLeft: 10, 
        paddingRight: 10, 
        paddingTop: 10,
        alignItems: 'center'
    },
    textSelectedTable: {
        color: '#000000',
        fontFamily: 'Tahoma Regular font',
        fontSize: 15,
        marginBottom: 10,
    },
    table: {
        padding: 5,
        backgroundColor: '#ffffff', 
        width: (maxWidth - 40) / 3, 
        height: 100, marginRight: 10, 
        marginBottom: 10, 
        borderRadius: 5,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOrder: {
        borderRadius: 52,
        width: 52,
        height: 52,
        backgroundColor: '#446CB3',
        position: 'absolute',
        bottom: 10,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tableHavePeople: {
        backgroundColor: '#F4D03F'
    },
    tableHaveOrder: {
        backgroundColor: '#D2D7D3'
    },
    tableName: {
        color: '#000000',
        fontFamily: 'Tahoma Regular font',
        fontSize: 15
    },
    stateName: {
        marginVertical: 2,
        color: '#000000',
        fontFamily: 'Tahoma Regular font',
        fontSize: 15,
        textAlign: 'center'
    },
    buttonShowInfoTableOrder: {
        backgroundColor: '#446CB3',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 5,
        padding: 2
    },
    textShowInfoTableOrder: {
        color: '#ffffff',
        fontSize: 15,
        fontFamily: 'Tahoma Regular font',
        textAlign: 'center'
    }
});

export default styles;