import React from 'react';
import { View, Text, Image, Picker, FlatList } from 'react-native';
import { observer } from 'mobx-react/native';

import styles from './foodStyles';

import FoodModel from '../../mobx/models/foodModel';
import CategoryModel from '../../mobx/models/categoryModel';
import PriceModel from '../../mobx/models/priceModel';

@observer
export default class Food extends React.Component {
    componentDidMount() {
        CategoryModel.getAllCategories();
        PriceModel.getAllPrices();
        FoodModel.getAllFoodByFilters(
            CategoryModel.selectedCategory._id, 
            PriceModel.selectedPrice.filterPriceFrom,
            PriceModel.selectedPrice.filterPriceTo,
            PriceModel.selectedPrice.filterPriceSmallFrom,
            PriceModel.selectedPrice.filterPriceLargeFrom);
    }
 
    chosecCategory = item => {
        CategoryModel.chosecCategory(item, idCategory => {
            FoodModel.getAllFoodByFilters(
                idCategory, 
                PriceModel.selectedPrice.filterPriceFrom, 
                PriceModel.selectedPrice.filterPriceTo, 
                PriceModel.selectedPrice.filterPriceSmallFrom, 
                PriceModel.selectedPrice.filterPriceLargeFrom);
        });
    }

    chosePrice = item => {
        PriceModel.chosePrice(item, (filterPriceFrom, filterPriceTo, filterPriceSmallFrom, filterPriceLargeFrom) => {
            FoodModel.getAllFoodByFilters(
                CategoryModel.selectedCategory._id, 
                filterPriceFrom,
                filterPriceTo,
                filterPriceSmallFrom,
                filterPriceLargeFrom
            );
        });
    }

    render() {
        console.log(FoodModel.foods);
        return (
            <View 
                style={styles.container}>
                <Picker 
                    style={styles.pickerCategories} 
                    selectedValue={CategoryModel.selectedCategory}
                    onValueChange={(item, index) => this.chosecCategory(item)}>
                    <Picker.Item 
                        key='all' 
                        color='#000000' 
                        label="Tất cả" 
                        value={{
                            _id: 'all',
                            name: 'Tất cả'  
                        }} />
                    {
                        CategoryModel.categories.map((item, index) => {
                            return (
                                <Picker.Item 
                                    key={item._id} 
                                    color='#000000' 
                                    label={item.name} 
                                    value={item} />
                            );
                        })
                    }
                </Picker>
                <Picker 
                    style={styles.pickerPrices}
                    selectedValue={PriceModel.selectedPrice}
                    onValueChange={(item, index) => this.chosePrice(item)}>
                    <Picker.Item 
                        key='Tất cả'
                        color='#000000' 
                        label="Tất cả" 
                        value={{
                            filterPriceFrom: 'undefined',
                            filterPriceTo: 'undefined',
                            filterPriceSmallFrom: 'undefined',
                            filterPriceLargeFrom: 'undefined',
                            display: 'Tất cả'
                        }} />
                    {
                        PriceModel.prices.map((item, index) => {
                            return (
                                <Picker.Item 
                                    key={item.display}
                                    color='#000000' 
                                    label={item.display}
                                    value={item} />
                            );
                        })
                    }
                </Picker>
                <FlatList 
                    keyExtractor={food => String(food._id)} 
                    showsVerticalScrollIndicator={false} 
                    data={FoodModel.foods.slice()} 
                    renderItem={({item}) => {
                        const textPriceThrough = item.priceSale !== 0 ? styles.textPriceThrough : null;
                        return (
                            <View 
                                style={styles.foodItem}>
                                <Image 
                                    source={{uri: item.image}} 
                                    style={styles.imageFood} />
                                <View 
                                    style={styles.infoFood}>
                                    <View 
                                        style={styles.nameFood}>
                                        <Text 
                                            style={styles.textNameFood}>{item.name}</Text>
                                    </View>
                                    <View style={styles.priceFood}>
                                        <Text 
                                            style={[styles.textPriceFood, textPriceThrough]}>{item.price.toFixed(2)} vnđ</Text>
                                        {
                                            item.priceSale !== 0 && (
                                                <Text 
                                                    style={styles.textPriceFood}>{item.priceSale.toFixed(2)} vnđ</Text>
                                            )
                                        }
                                    </View>
                                </View>
                            </View>
                        );
                }} />
            </View>
        );
    }
}