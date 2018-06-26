import React from 'react';
import { YellowBox, View, Text, TouchableOpacity } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import TableComponent from './components/tableComponent/tableComponent';
import FoodComponent from './components/foodComponent/foodComponent';
import FlashScreenComponent from './components/flashScreenComponent/flashScreenComponent';

import styles from './styles';

import TableModel from './mobx/models/tableModel';
import PriceModel from './mobx/models/priceModel';
import FoodModel from './mobx/models/foodModel';
import CategoryModel from './mobx/models/categoryModel';

class TabBottomComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switchTable: true
        }
        this.tabs = {
            Table: {
                methodSwitch: this.onSwitchTable,
                label: 'Đặt bàn'
            },
            Food: {
                methodSwitch: this.onSwitchFood,
                label: 'Danh sách thức ăn'
            }
        }
    }

    onSwitchTable = () => {
        TableModel.getAllTables();
        FoodModel.reset();
        CategoryModel.reset();
        PriceModel.reset();
        this.props.navigation.navigate('Table');
    }

    onSwitchFood = () => {
        CategoryModel.getAllCategories();
        TableModel.reset();
        this.props.navigation.navigate('Food');
    }

    render() {
        return (
            <View style={styles.tabBottom}>
            {
                this.props.navigation.state.routes.map((item, index) => {
                    return (
                        <TouchableOpacity style={[styles.tabBarBottom, this.props.navigation.state.index === index ? styles.tabBarBottomActive : null]} key={item.key} onPress={this.tabs[item.key].methodSwitch}>
                            <Text style={styles.textBarBottom}>
                                {this.tabs[item.key].label}
                            </Text>
                        </TouchableOpacity>
                    );
                })
            }
            </View>
        );
    }
}

const Table = createStackNavigator({TableComponent}, {
    navigationOptions: {
        headerTitle: 'Đặt bàn',
        headerTitleStyle: styles.headerTitle,
        headerStyle: styles.headerStyle
    }
});

const Food = createStackNavigator({FoodComponent}, {
    navigationOptions: {
        headerTitle: 'Danh sách thức ăn',
        headerTitleStyle: styles.headerTitle,
        headerStyle: styles.headerStyle
    }
});

const FlashScreen = createStackNavigator({FlashScreenComponent}, {
    headerMode: 'none'
});

const TabBottomNavigator = createBottomTabNavigator({
    Table,
    Food
},
{
    initialRouteName: 'Table',
    tabBarComponent: TabBottomComponent,
    animationEnabled: true
});

const SwitchNavigator = createSwitchNavigator({
    FlashScreen,
    Main: TabBottomNavigator
},
{
    initialRouteName: 'FlashScreen',
    animationEnabled: true
});

class App extends React.Component {
    render() {
        return (
            <SwitchNavigator />
        );
    }
}

export default App;
