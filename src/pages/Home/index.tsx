import { useContext } from "react";

import { Banner } from "./fragments/Banner";
import { CardCoffee } from "./fragments/CardCoffee";
import { CoffeesContainer, Title } from "./styles";
import { CoffeesContext } from "../../context/CoffeesContext";

export function Home() {
    const { coffeesData } = useContext(CoffeesContext)
    
    return (
        <div>
            <Banner />

            <Title>Nossos cafés</Title>

            <CoffeesContainer>
                {coffeesData.map(item => (
                    <CardCoffee key={item.id} item={item} />
                ))}
            </CoffeesContainer>
        </div>
    )
}