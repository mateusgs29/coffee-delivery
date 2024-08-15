import { Trash } from "phosphor-react";
import { InputNumber } from "../../../../components/InputNumber";
import { Title } from "../../styles";

import imgTest from "../../../../assets/coffees/americano.png"
import { ButtonConfirm, ButtonDelete, DetailsCoffee, ItemCoffee, OrderContainer, Total, TotalItems } from "./styles";
import { useNavigate } from "react-router-dom";

export function DetailsOrder() {
    const navigate = useNavigate();

    const confirmOrder = () => {
        navigate("/pedido-confirmado");
    }

    return (
        <div>
            <Title>Cafés selecionados</Title>

            <OrderContainer>
                <ItemCoffee>
                    <img src={imgTest} alt="" />

                    <DetailsCoffee>
                        <div>
                            <span>Nome do café</span>
                            <span>R$ 9,90</span>
                        </div>

                        <div>
                            <InputNumber value={1} onChange={() => console.log("")} />
                            <ButtonDelete>
                                <Trash size={16} />
                                Remover
                            </ButtonDelete>
                        </div>
                    </DetailsCoffee>
                </ItemCoffee>

                <TotalItems>
                    <span>Total de itens</span>
                    <span>R$ 29,70</span>
                </TotalItems>

                <TotalItems>
                    <span>Entrega</span>
                    <span>R$ 3,50</span>
                </TotalItems>

                <Total>
                    <span>Total</span>
                    <span>R$ 33,20</span>
                </Total>

                <ButtonConfirm onClick={confirmOrder}>Confirmar pedido</ButtonConfirm>
            </OrderContainer>
        </div>
    )
}