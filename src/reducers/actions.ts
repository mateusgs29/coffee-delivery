import { ICoffeeCart } from "./reducers";

export enum ActionTypes {
    ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
}

export function addNewCoffeeCartAction(coffeeCart: ICoffeeCart) {
    return {
        type: ActionTypes.ADD_NEW_COFFEE,
        payload: { coffeeCart }
    }
}

