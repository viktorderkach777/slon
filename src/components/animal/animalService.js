import axios from "axios";

export default class AnimalService {
    static getListData() {
        return axios.get('https://localhost:44303/api/animal/search')
    };
}