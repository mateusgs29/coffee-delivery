import { ActionTypes } from "./actions"

export interface ICoffeeCart {
    id: number,
    name: string,
    urlImage: string,
    price: number,
    amount: number
}

export interface IAddress {
    cep: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
}

interface CoffeesState {
    coffeesCart: ICoffeeCart[],
    address: IAddress,
    payment: string
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

        case ActionTypes.UPDATE_AMOUNT_COFFEE: {
            const updatedCoffeesCart = state.coffeesCart.map(item => 
                item.id === action.payload.idCoffee
                    ? { ...item, amount: action.payload.amount }
                    : item
            )

            return {
                ...state,
                coffeesCart: updatedCoffeesCart
            }
        }

        case ActionTypes.REMOVE_COFFEE: {
            const updatedCoffeesCart = state.coffeesCart.filter(item => 
                item.id !== action.payload.idCoffee
            )

            return {
                ...state,
                coffeesCart: updatedCoffeesCart
            }
        }

        case ActionTypes.FINISH_ORDER: {     
            return {
                ...state,
                coffeesCart: [],
                address: action.payload.address,
                payment: action.payload.payment
            }
        }

        default:
            return state
    }
}