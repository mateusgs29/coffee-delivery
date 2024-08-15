import { ActionTypes } from "./actions"

export interface ICoffeeCart {
    id: number,
    name: string,
    urlImage: string,
    price: number,
    amount: number
}

interface CoffeesState {
    coffeesCart: ICoffeeCart[],
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function coffeesReducer(state: CoffeesState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_COFFEE: {
            const coffeeCartIndex = state.coffeesCart.findIndex(item => 
                item.id === action.payload.coffeeCart.id
            )

            if (coffeeCartIndex === -1) {
                return {
                    ...state,
                    coffeesCart: [...state.coffeesCart, action.payload.coffeeCart]
                }
            } 
            
            const updatedCoffeesCart = state.coffeesCart.map((item, index) => 
                index === coffeeCartIndex
                    ? { ...item, amount: item.amount + action.payload.coffeeCart.amount }
                    : item
            )

            return {
                ...state,
                coffeesCart: updatedCoffeesCart
            }
        }
        default:
            return state
    }
}