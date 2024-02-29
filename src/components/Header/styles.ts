import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
`;

export const ActionsNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;
`

export const ButtonAddress = styled(NavLink)`
    background-color: ${props => props.theme["purple-light"]};
    color: ${props => props.theme["purple-dark"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 6px;
    gap: 5px;
    font-size: 0.875rem;
    border: none;
    cursor: pointer;
    text-decoration: none;

    > svg {
        color: ${props => props.theme.purple};
    }

    @media (max-width: 350px) {
        span {
            display: none;
        }
    }
`

export const ButtonCart = styled(NavLink)`
    position: relative;
    background: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    border: none;
    border-radius: 6px;
    padding: 0.5rem;
    line-height: 0;
    cursor: pointer;

    > span {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: bold;
        border-radius: 50%;
        top: -8px;
        right: -8px;
        width: 1.25rem;
        height: 1.25rem;
        background-color: ${props => props.theme["yellow-dark"] };
        color: ${props => props.theme.white};
    }

    @media (max-width: 1200px) {
        margin-right: 5px;
    }
`