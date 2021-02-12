import axios from "axios";
import { API_SOLDIERS } from "./config";

export default class SoldierService {

    static addSoldier(soldier: object): Promise<object> {
        return axios
            .post(API_SOLDIERS, {...soldier,})
            .then(response => response.data)
            .catch(error => this.handleError(error))
    }

    static getSoldiers(): Promise<object> {
        return axios
            .get(API_SOLDIERS)
            .then(response =>{
                const soldiers: any = Object.values(response.data);
                return soldiers;                
            })
            .catch(error => this.handleError(error)) 
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error):void {
        console.error(error)
    }

}