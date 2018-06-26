import { observable, action } from 'mobx';

type PriceItem = {
    filterPriceFrom: string,
    filterPriceTo: string,
    filterPriceSmallFrom: string,
    filterPriceLargeFrom: string,
    display: string
}

class Price {
    @observable prices: Array<PriceItem> = observable([]);
    @observable selectedPrice: PriceItem = {
        filterPriceFrom: 'undefined',
        filterPriceTo: 'undefined',
        filterPriceSmallFrom: 'undefined',
        filterPriceLargeFrom: 'undefined',
        display: 'Tất cả'
    }

    @action getAllPrices() {
        this.prices = [
            {
                filterPriceFrom: 'undefined',
                filterPriceTo: 'undefined',
                filterPriceSmallFrom: '50000',
                filterPriceLargeFrom: 'undefined',
                display: 'Dưới 50.000 vnđ'
            },
            {
                filterPriceFrom: '50000',
                filterPriceTo: '80000',
                filterPriceSmallFrom: 'undefined',
                filterPriceLargeFrom: 'undefined',
                display: '50.000 vnđ - 80.000 vnđ'
            },
            {
                filterPriceFrom: '80000',
                filterPriceTo: '120000',
                filterPriceSmallFrom: 'undefined',
                filterPriceLargeFrom: 'undefined',
                display: '80.000 vnđ - 120.000 vnđ'
            },
            {
                filterPriceFrom: '120000',
                filterPriceTo: '150000',
                filterPriceSmallFrom: 'undefined',
                filterPriceLargeFrom: 'undefined',
                display: '120.000 vnđ - 150.000 vnđ'
            },
            {
                filterPriceFrom: 'undefined',
                filterPriceTo: 'undefined',
                filterPriceSmallFrom: 'undefined',
                filterPriceLargeFrom: '150000',
                display: 'Trên 150.000 vnđ'
            }
        ]
    }

    @action chosePrice(priceItem: PriceItem, callbackGetAllFoodByFilter) {
        this.selectedPrice = priceItem;
        callbackGetAllFoodByFilter(
            this.selectedPrice.filterPriceFrom, 
            this.selectedPrice.filterPriceTo,
            this.selectedPrice.filterPriceSmallFrom,
            this.selectedPrice.filterPriceLargeFrom);
    }

    @action reset() {
        this.selectedPrice = {
            filterPriceFrom: 'undefined',
            filterPriceTo: 'undefined',
            filterPriceSmallFrom: 'undefined',
            filterPriceLargeFrom: 'undefined',
            display: 'Tất cả'
        };
    }
}

const price = new Price();

export default price;