import { IAddress, ICoffeeCart } from "./reducers";

export enum ActionTypes {
    ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
    UPDATE_AMOUNT_COFFEE = 'UPDATE_AMOUNT_COFFEE',
    REMOVE_COFFEE = 'REMOVE_COFFEE',
    FINISH_ORDER = 'FINISH_ORDER'
}

export function addNewCoffeeCartAction(coffeeCart: ICoffeeCart) {
    return {
        type: ActionTypes.ADD_NEW_COFFEE,
        payload: { coffeeCart }
    }
}

export function updateAmountCoffeeAction(idCoffee: number, amount: number) {
    return {
        type: ActionTypes.UPDATE_AMOUNT_COFFEE,
        payload: { idCoffee, amount }
    }
}

export function removeCoffeeAction(idCoffee: number) {
    return {
        type: ActionTypes.REMOVE_COFFEE,
        payload: { idCoffee }
    }
}

export function finishOrderAction(address: IAddress, payment: string) {
    return {
        type: ActionTypes.FINISH_ORDER,
        payload: { address, payment }
    }
}