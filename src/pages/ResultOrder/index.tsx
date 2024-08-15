import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import imgDeliveryOrder from '../../assets/img-delivery-order.png'
import { Container, Content, IconList, ListResultOrder, Subtitle, TextsList, Title } from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContext'

export function ResultOrder() {
    const { address, payment } = useContext(CoffeesContext)

    const paymentLabel: { [key: string]: string } = {
        'credito': 'Cartão de Crédito',
        'debito': 'Cartão de Débito',
        'dinheiro': 'Dinheiro'
    }

    return (
        <Container>
            <Title>Uhu! Pedido confirmado</Title>
            <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>

            <Content>
                <ListResultOrder>
                    <li>
                        <IconList coloricon='purple'><MapPin size={16} color="white" weight='fill' /></IconList>
                        <TextsList>
                            <span>Entrega em <strong>{ address.rua }, { address.numero }</strong></span>
                            <span>{ address.bairro } - { address.cidade}, { address.uf }</span>
                        </TextsList>
                    </li>

                    <li>
                        <IconList coloricon='yellow'><Timer size={16} color="white" weight='fill' /></IconList>
                        <TextsList>
                            <span>Previsão de entrega</span>
                            <span><strong>20 min - 30 min</strong></span>
                        </TextsList>
                    </li>

                    <li>
                        <IconList coloricon='yellow-dark'><CurrencyDollar size={16} color="white" weight='fill' /></IconList>
                        <TextsList>
                            <span>Pagamento na entrega</span>
                            <span><strong>{ paymentLabel[payment] }</strong></span>
                        </TextsList>
                    </li>
                </ListResultOrder>

                <img src={imgDeliveryOrder} alt="" />
            </Content>
        </Container>
    )
}