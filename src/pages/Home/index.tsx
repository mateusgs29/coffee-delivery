import { Banner } from "./components/Banner";
import { CardCoffee } from "./components/CardCoffee";
import { data } from "./data";
import { CoffeesContainer, Title } from "./styles";

export function Home() {
    return (
        <div>
            <Banner />

            <Title>Nossos cafés</Title>

            <CoffeesContainer>
                {data.map(item => (
                    <CardCoffee key={item.id} item={item} />
                ))}
            </CoffeesContainer>
        </div>
    )
}