import { ReactNode, createContext, useReducer, useEffect, useState } from "react";
import { data } from "./data";
import { coffeesReducer, IAddress, ICoffeeCart } from "../reducers/reducers";
import { addNewCoffeeCartAction, finishOrderAction, removeCoffeeAction, updateAmountCoffeeAction } from "../reducers/actions";

interface CoffeesDataType {
    id: number
    name: string
    description: string
    urlImage: string
    tags: string[]
    price: number
}

interface CoffeesContextType {
    coffeesData: CoffeesDataType[],
    coffeesCart: ICoffeeCart[],
    totalAmountCoffeeCart: number,
    address: IAddress,
    payment: string,
    addNewCoffeeCart: (coffeeCart: CoffeesDataType, amount: number) => void,
    updateAmountCoffeeCart: (idCoffee: number, amount: number) => void,
    removeCoffeeCart: (idCoffee: number) => void,
    finishOrder: (address: IAddress, payment: string) => void
}

interface CoffeesContextProviderProps {
    children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
    const [coffeesCartState, dispatch] = useReducer(
        coffeesReducer, 
        { 
            coffeesCart: [],
            address: {
                cep: '',
                rua: '',
                numero: '',
                complemento: '',
                bairro: '',
                cidade: '',
                uf: '',
            },
            payment: ''
        },
        (initialState) => {
            const storedStateAsJSON = localStorage.getItem('@coffees-cart-1.0.0')

            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON)
            }

            return initialState
        }
    )

    const [totalAmountCoffeeCart, setTotalAmountCoffeeCart] = useState(0)
    const coffeesData = data
    const { coffeesCart, address, payment } = coffeesCartState

    useEffect(() => {
        const stateJSON = JSON.stringify(coffeesCartState)

        localStorage.setItem('@coffees-cart-1.0.0', stateJSON)

        const total = coffeesCartState.coffeesCart
            .reduce((sum, item) => sum + item.amount, 0)
            
        setTotalAmountCoffeeCart(total)
    }, [coffeesCartState, totalAmountCoffeeCart])

    function addNewCoffeeCart(coffeeCart: CoffeesDataType, amount: number) {
        const newCoffeeCart = {
            id: coffeeCart.id,
            name: coffeeCart.name,
            urlImage: coffeeCart.urlImage,
            price: coffeeCart.price,
            amount,
        }

        dispatch(addNewCoffeeCartAction(newCoffeeCart))
    }

    function updateAmountCoffeeCart(idCoffee: number, amount: number) {
        dispatch(updateAmountCoffeeAction(idCoffee, amount))
    }

    function removeCoffeeCart(idCoffee: number) {
        dispatch(removeCoffeeAction(idCoffee))
    }

    function finishOrder(address: IAddress, payment: string) {
        dispatch(finishOrderAction(address, payment))
    }

    return (
        <CoffeesContext.Provider 
            value={{ 
                coffeesData,
                coffeesCart,
                totalAmountCoffeeCart,
                address,
                payment,
                addNewCoffeeCart,
                updateAmountCoffeeCart,
                removeCoffeeCart,
                finishOrder
            }}
        >
            {children}
        </CoffeesContext.Provider>
    )
}