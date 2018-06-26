import { observable, action } from 'mobx';

const GET_ALL_TABLES = 'http://192.168.1.211:3000/restful-api-mobile/table/get-all-table';
const GET_TIME_ORDER_AND_TIME_COME_IN_BY_ID_TABLE = 'http://192.168.1.211:3000/restful-api-mobile/user-order/get-time-order-and-time-come-in-by-id-table';

type TableItem = {
    _id: string,
    name: string,
    status: number
}

class Table {
    @observable tables: Array<TableItem> = observable([]);
    @observable selectedTable: TableItem = {
        _id: '',
        name: '',
        status: 0
    };

    @action getAllTables() {
        fetch(GET_ALL_TABLES, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resJson => {
            this.tables = resJson.res;
        }).catch(err => alert('Có lỗi xảy ra, xin vui lòng thử lại sau'));
    }

    @action choseTable(tableItem: TableItem) {
        this.selectedTable = tableItem;
    }

    @action async getTimeOrderAndTimeComeInByIdTable(idTable) {
        try {
            const res = await fetch(`${GET_TIME_ORDER_AND_TIME_COME_IN_BY_ID_TABLE}/${idTable}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const resJson = await res.json();
            const { timeOrder, timeComeIn } = resJson.res[0];
            return {
                timeOrder: timeOrder,
                timeComeIn: timeComeIn
            }
        } catch(err) {}
    }

    @action reset() {
        this.tables = observable([]);
        this.selectedTable = {
            _id: '',
            name: '',
            status: 0
        };
    }
}

const table = new Table();

export default table;