import React from 'react';
import { View, Text, FlatList, TouchableOpacity, TouchableNativeFeedback, Image, Alert } from 'react-native';
import { observer } from 'mobx-react/native';
import RNPhoneCall from 'react-native-phone-call';

import telephone from '../../assets/imgs/telephone.png';

import styles from './tableStyles';

import TableModel from '../../mobx/models/tableModel';

import io from 'socket.io-client/dist/socket.io';

@observer
export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.socket = io("http://192.168.1.211:3000/", {jsonp: false});
        this.socket.on('update-table', function(data) {
            if(data === true) {
                TableModel.reset();
                TableModel.getAllTables();
            }
        }.bind(this));
        // this.socket.on('send-sms-user-order-table', function(data) {
        //     alert(data);
        // });
    }

    componentDidMount() {
        TableModel.getAllTables();
    }

    call = () => {
        try {
            RNPhoneCall.call('0909747536').then((data) => {}).catch(function(err) {});
        } catch(err) {}
    }

    order = () => {
        if(TableModel.selectedTable._id !== '') {
            Alert.alert(
                'Thông báo đặt bàn',
                `Bạn có đồng ý đặt ${TableModel.selectedTable.name} này không ?. Nếu đồng ý app sẽ tự động gọi đến nhà hàng`,
                [
                    {
                        text: 'Đồng ý', onPress: () => this.call()
                    },
                    {
                        text: 'Hủy bỏ', style: 'cancel'
                    }
                ]
            )
        } else {
            Alert.alert(
                'Nhắc nhở',
                'Bạn chưa chọn bàn cần đặt',
            )
        }
    }

    showInfoTableOrder = async (nameTable, idTable) => {
        const response = await TableModel.getTimeOrderAndTimeComeInByIdTable(idTable);
        if(response.timeOrder && response.timeComeIn) {
            const timeOrder = new Date(response.timeOrder);
            const timeComeIn = new Date(response.timeComeIn);
            Alert.alert(
                `Thông tin đặt bàn ${nameTable}`,
                `Giờ đặt: ${timeOrder.toUTCString()}` + '\n' +
                `Giờ đến: ${timeComeIn.toUTCString()}`
            )
        } else {
            alert('Có lỗi xảy ra');
        }
    }

    render() {
        const tableName = TableModel.selectedTable._id === '' ? 'Bạn chưa chọn bàn cần đặt' : `Bạn đang chọn ${TableModel.selectedTable.name}`;
        return (
            <View 
                style={styles.container}>
                <Text style={styles.textSelectedTable}>{tableName}</Text>
                <FlatList 
                    keyExtractor={table => String(table._id)} 
                    showsVerticalScrollIndicator={false} 
                    data={TableModel.tables.slice()} 
                    numColumns={3} 
                    renderItem={({item}) => {
                        let backgroundColorState = null;
                        let stateName = 'Trống';
                        if(item.status === 1) {
                            backgroundColorState = styles.tableHavePeople;
                            stateName = 'Đang có người';
                        } else if (item.status === 2) {
                            backgroundColorState = styles.tableHaveOrder;
                            stateName = 'Đang đặt';
                        }
                        return (
                            <TouchableNativeFeedback onPress={() => TableModel.choseTable(item)}>
                                <View style={[styles.table, backgroundColorState]}>
                                    <Text style={styles.tableName}>{item.name}</Text>
                                    <Text style={styles.stateName}>{stateName}</Text>
                                    {
                                        item.status === 2 && (
                                            <TouchableOpacity style={styles.buttonShowInfoTableOrder} onPress={() => this.showInfoTableOrder(item.name, item._id)}>
                                                <Text style={styles.textShowInfoTableOrder}>Xem thông tin</Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                </View>
                            </TouchableNativeFeedback>
                        );
                    }} 
                />
                <TouchableOpacity 
                    onPress={this.order}
                    style={styles.buttonOrder}>
                    <Image 
                        source={telephone} />
                </TouchableOpacity>
            </View>
        );
    }
}

