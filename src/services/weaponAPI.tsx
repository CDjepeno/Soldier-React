import axios, { AxiosResponse } from "axios";
import { API_WEAPONS } from "./config";


export default class WeaponService {

    static getWeapons() {
        return axios
        .get(API_WEAPONS)
        .then(response => {
            const weaponArray: any = Object.values(response.data)
            return weaponArray;
        })
        .catch(error => this.handleError(error));
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error):void {
        console.error(error)
    }

}