import { ShoppingCart } from "phosphor-react";
import { InputNumber } from "../../../../components/InputNumber";
import { ButtonCartCoffee, CardCoffeeContainer, FooterCard, PriceCoffee, TagsCoffee } from "./styles";
import { useState } from "react";

interface CardCoffeeProps {
    item: {
        urlImage: string;
        name: string;
        tags: string[];
        description: string;
        price: number;
    }
}

export function CardCoffee({ item }: CardCoffeeProps) {
    const [qtd, setQtd] = useState(1)

    const addToCart = () => {
        console.log("QUANTIDADE", qtd)
    }

    return (
        <CardCoffeeContainer>
            <img src={item.urlImage} alt={item.name} />

            <TagsCoffee>
                { item.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                ))}
            </TagsCoffee>

            <h4>{item.name}</h4>
            <p>{item.description}</p>
            
            <FooterCard>
                <PriceCoffee>{item.price.toFixed(2).replace('.', ',')}</PriceCoffee>
                <div>
                    <InputNumber value={qtd} onChange={setQtd} max={20} />
                    <ButtonCartCoffee onClick={addToCart}><ShoppingCart weight="fill" /></ButtonCartCoffee>
                </div>
            </FooterCard>
        </CardCoffeeContainer>
    )
}