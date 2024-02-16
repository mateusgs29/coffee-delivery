import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffee from '../../assets/logo-default.svg'
import { ActionsNav, ButtonAddress, ButtonCart, HeaderContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffee} alt="" />
            <ActionsNav>
                <ButtonAddress>
                    <MapPin size={20} weight='fill' /> Porto Alegre, RS
                </ButtonAddress>
                <ButtonCart>
                    <ShoppingCart size={20} weight='fill' />
                    <span>3</span>
                </ButtonCart>
            </ActionsNav>
        </HeaderContainer>
    )
}