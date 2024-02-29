import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffee from '../../assets/logo-default.svg'
import { ActionsNav, ButtonAddress, ButtonCart, HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to='/' title="Ir para página inicial">
                <img src={logoCoffee} alt="" />
            </NavLink>
            <ActionsNav>
                <ButtonAddress to='/pedido' title='Endereço'>
                    <MapPin size={20} weight='fill' /> 
                    <span>Porto Alegre, RS</span>
                </ButtonAddress>
                <ButtonCart to='/pedido' title='Carrinho'>
                    <ShoppingCart size={20} weight='fill' />
                    <span>3</span>
                </ButtonCart>
            </ActionsNav>
        </HeaderContainer>
    )
}