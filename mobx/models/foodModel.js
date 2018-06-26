import { observable, action } from 'mobx';

const GET_ALL_FOOD_BY_FILTER = 'http://192.168.1.211:3000/restful-api-mobile/food/get-all-food-by-filter';

type FoodItem = {
    _id: string,
    name: string,
    price: number,
    priceSale: number,
    idCategory: string,
    image: string
}

class Food {
    @observable foods: Array<FoodItem> = observable([]);

    @action getAllFoodByFilters(idCategory, filterPriceFrom, filterPriceTo, filterPriceSmallFrom, filterPriceLargeFrom) {
        let url = `${GET_ALL_FOOD_BY_FILTER}?idCategory=${idCategory}`;
        if(filterPriceFrom != 'undefined' && filterPriceTo != 'undefined' && filterPriceSmallFrom == 'undefined' && filterPriceLargeFrom == 'undefined') {
            url = `${url}&filterPriceFrom=${filterPriceFrom}&filterPriceTo=${filterPriceTo}`;
        } else if (filterPriceFrom == 'undefined' && filterPriceTo == 'undefined' && filterPriceSmallFrom != 'undefined' && filterPriceLargeFrom == 'undefined') {
            url = `${url}&filterPriceSmallFrom=${filterPriceSmallFrom}`;
        } else if (filterPriceFrom == 'undefined' && filterPriceTo == 'undefined' && filterPriceSmallFrom == 'undefined' && filterPriceLargeFrom != 'undefined') {
            url = `${url}&filterPriceLargeFrom=${filterPriceLargeFrom}`;
        }
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resJson => {
            this.foods = resJson.res;
        }).catch(err => alert('Có lỗi xảy ra, xin vui lòng thử lại sau'));
    }

    @action reset() {
        this.foods = observable([]);
    }
}

const food = new Food();

export default food;