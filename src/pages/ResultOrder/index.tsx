import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import imgDeliveryOrder from '../../assets/img-delivery-order.png'
import { Container, Content, IconList, ListResultOrder, Subtitle, TextsList, Title } from './styles'

export function ResultOrder() {
    return (
        <Container>
            <Title>Uhu! Pedido confirmado</Title>
            <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>

            <Content>
                <ListResultOrder>
                    <li>
                        <IconList colorIcon='purple'><MapPin size={16} color="white" weight='fill' /></IconList>
                        <TextsList>
                            <span>Entrega em <strong>Rua João Daniel Martinelli, 103</strong></span>
                            <span>Farrapos - Porto Alegre, RS</span>
                        </TextsList>
                    </li>

                    <li>
                        <IconList colorIcon='yellow'><Timer size={16} color="white" weight='fill' /></IconList>
                        <TextsList>
                            <span>Previsão de entrega</span>
                            <span><strong>20 min - 30 min</strong></span>
                        </TextsList>
                    </li>

                    <li>
                        <IconList colorIcon='yellow-dark'><CurrencyDollar size={16} color="white" weight='fill' /></IconList>
                        <TextsList>
                            <span>Pagamento na entrega</span>
                            <span><strong>Dinheiro</strong></span>
                        </TextsList>
                    </li>
                </ListResultOrder>

                <img src={imgDeliveryOrder} alt="" />
            </Content>
        </Container>
    )
}