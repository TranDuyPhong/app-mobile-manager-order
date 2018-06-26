import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

import styles from './flashScreenStyles';

import background from '../../assets/imgs/background.jpg';
import logo from '../../assets/imgs/logo.png';
import food from '../../assets/imgs/food.png';
import water from '../../assets/imgs/water.png';
import cake from '../../assets/imgs/cake.png';

class FlashScreen extends React.Component {
    componentWillMount() {
        let timeOutSwitchMain = setTimeout(() => {
            this.props.navigation.navigate('Main');
            clearTimeout(timeOutSwitchMain);
        }, 2000);
    }
    render() {
        return (
            <ImageBackground style={styles.backgroundImage} source={background}>
                <View style={styles.container}>
                    <Text style={styles.title}>ỨNG DỤNG QUẢN LÝ ORDER NHÀ HÀNG</Text>
                    <View style={styles.threeRestaurant}>
                        <Image source={food} />
                        <Image source={water} />
                        <Image source={cake} />
                    </View>
                    <Image source={logo} />
                </View>
                <Text style={styles.hotline}>Gọi ngay cho chúng tôi: ( 0909747536 )</Text>
            </ImageBackground>
        );
    }
}

export default FlashScreen;