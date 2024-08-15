import { ReactNode, createContext, useReducer, useEffect, useState } from "react";
import { data } from "./data";
import { coffeesReducer, ICoffeeCart } from "../reducers/reducers";
import { addNewCoffeeCartAction } from "../reducers/actions";

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
    addNewCoffeeCart: (coffeeCart: CoffeesDataType, amount: number) => void
}

interface CoffeesContextProviderProps {
    children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
    const [coffeesCartState, dispatch] = useReducer(
        coffeesReducer, 
        { coffeesCart: [] },
    )

    const [totalAmountCoffeeCart, setTotalAmountCoffeeCart] = useState(0)
    const coffeesData = data
    const { coffeesCart } = coffeesCartState

    useEffect(() => {
        const stateJSON = JSON.stringify(coffeesCartState)

        localStorage.setItem('@coffees-cart-1.0.0', stateJSON)

        const total = coffeesCartState.coffeesCart
            .reduce((sum, item) => sum + item.amount, 0)
            
        setTotalAmountCoffeeCart(total)
    }, [coffeesCartState])

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

    return (
        <CoffeesContext.Provider 
            value={{ 
                coffeesData,
                coffeesCart,
                totalAmountCoffeeCart,
                addNewCoffeeCart
            }}
        >
            {children}
        </CoffeesContext.Provider>
    )
}