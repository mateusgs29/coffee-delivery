import { ShoppingCart, Check } from "phosphor-react";
import { InputNumber } from "../../../../components/InputNumber";
import { ButtonCartCoffee, CardCoffeeContainer, FooterCard, PriceCoffee, TagsCoffee } from "./styles";
import { useContext, useState } from "react";
import { CoffeesContext } from "../../../../context/CoffeesContext";

interface CardCoffeeProps {
    item: {
        id: number;
        name: string;
        urlImage: string;
        tags: string[];
        description: string;
        price: number;
    }
}

export function CardCoffee({ item }: CardCoffeeProps) {
    const [qtd, setQtd] = useState(1)
    const [added, setAdded] = useState(false)

    const { addNewCoffeeCart } = useContext(CoffeesContext)

    const addToCart = () => {
        setAdded(true)

        setTimeout(() => {
            setAdded(false)
        }, 1000)

        addNewCoffeeCart(item, qtd)
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
                    <ButtonCartCoffee onClick={addToCart} disabled={added}>
                        { added ?
                            <Check weight="bold" />
                            :
                            <ShoppingCart weight="fill" />
                        }
                    </ButtonCartCoffee>
                </div>
            </FooterCard>
        </CardCoffeeContainer>
    )
}