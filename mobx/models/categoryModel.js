import { observable, action } from 'mobx';

const GEt_ALL_CATEGORY = 'http://192.168.1.211:3000/restful-api-mobile/category/get-all-category';

type CategoryItem = {
    _id: string,
    name: string
}

class Category {
    @observable categories : Array<CategoryItem> = observable([]); 
    @observable selectedCategory: CategoryItem = {
        _id: 'all',
        name: 'Tất cả'
    };

    @action getAllCategories() {
        fetch(GEt_ALL_CATEGORY, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resJson => {
            this.categories = resJson.res;
        }).catch(err => alert('Có lỗi xảy ra, xin vui lòng thử lại sau'));
    }

    @action chosecCategory(categoryItem: CategoryItem, callbackGetAllFoodByFilter) {
        this.selectedCategory = categoryItem;
        callbackGetAllFoodByFilter(this.selectedCategory._id);
    } 

    @action reset() {
        this.categories = observable([]); 
        this.selectedCategory = {
            _id: 'all',
            name: 'Tất cả'
        };
    }
}

const category = new Category();

export default category;