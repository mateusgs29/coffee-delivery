import { Trash } from "phosphor-react";
import { InputNumber } from "../../../../components/InputNumber";
import { Title } from "../../styles";

import { 
    ButtonConfirm, 
    ButtonDelete, 
    DetailsCoffee, 
    ItemCoffee, 
    NoCoffeeSelected, 
    OrderContainer, 
    Total, 
    TotalItems 
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { CoffeesContext } from "../../../../context/CoffeesContext";
import { useFormContext } from "react-hook-form";

export function DetailsOrder() {
    const [totalPriceItems, setTotalPriceItems] = useState("0");
    const { coffeesCart, updateAmountCoffeeCart, removeCoffeeCart } = useContext(CoffeesContext);
    
    const { formState: { isValid } } = useFormContext();

    const formatPrice = (price: number, amount: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price * amount)
    }

    useEffect(() => {
        const total = coffeesCart?.reduce((sum, item) => sum + (item.price * item.amount), 0)
        
        const totalFormatted = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(total)
        
        setTotalPriceItems(totalFormatted)
    }, [coffeesCart])

    return (
        <div>
            <Title>Cafés selecionados</Title>

            <OrderContainer>
                { coffeesCart?.length === 0 ? (
                    <NoCoffeeSelected>Nenhum café selecionado</NoCoffeeSelected>
                ) : coffeesCart?.map(item => (
                    <ItemCoffee key={item.id}>
                        <img src={item.urlImage} alt="" />

                        <DetailsCoffee>
                            <div>
                                <span>{ item.name }</span>
                                <span>{ formatPrice(item.price, item.amount) }</span>
                            </div>

                            <div>
                                <InputNumber 
                                    value={item.amount} 
                                    onChange={(qtd) => updateAmountCoffeeCart(item.id, qtd)} 
                                    max={20}
                                />
                                <ButtonDelete type="button" onClick={() => removeCoffeeCart(item.id)}>
                                    <Trash size={16} />
                                    Remover
                                </ButtonDelete>
                            </div>
                        </DetailsCoffee>
                    </ItemCoffee>
                ))}

                <TotalItems>
                    <span>Total de itens</span>
                    <span>{ totalPriceItems }</span>
                </TotalItems>

                <TotalItems>
                    <span>Entrega</span>
                    <span>R$ 3,50</span>
                </TotalItems>

                <Total>
                    <span>Total</span>
                    <span>
                        { new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(Number(totalPriceItems.replace("R$", "").replace(",", ".")) + 3.5)
                        }
                    </span>
                </Total>

                <ButtonConfirm 
                    disabled={coffeesCart?.length === 0 || !isValid}
                    type="submit"
                >
                    Confirmar pedido
                </ButtonConfirm>
            </OrderContainer>
        </div>
    )
}