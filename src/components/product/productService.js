import axios from "axios";

export default class ProductService {
    static getListData() {
        return axios.get('https://localhost:44303/api/product/search')
    };
}