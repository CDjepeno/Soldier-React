import axios, { AxiosResponse } from "axios";


export default class WeaponService {

  

    static getWeapons() {
        return axios
        .get('https://soldier-81b1b-default-rtdb.europe-west1.firebasedatabase.app/weapons.json')
        .then(response => {
            const weaponArray = Object.values(response.data)
            return weaponArray;
        })
        .catch(error => this.handleError(error));
    }

    // static getobject(id: number): Promise<Object|null> {
    //     return axios
    //     .get(url)
    //     .then(response => response.json())
    //     .then(data => this.isEmpty(data) ? null : data)
    //     .catch(error => this.handleError(error));
    // }

    // static updateobject(object: object): Promise<Object> {
    //     return axios
    //     .update
    // }

    // static addobject(object: object): Promise<object> {
    //     return axios
    //     .post(url, {
    //     ...object,
    //     })
    //     .then(response => response.data)
    //     .catch(error => this.handleError(error))
    // }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error):void {
        console.error(error)
    }

}