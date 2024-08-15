import styled from "styled-components";

export const OrderContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px 36px;
    margin-top: 1rem;

    @media (max-width: 768px) {
        padding: 2rem;
    }
`

export const ItemCoffee = styled.div`
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid ${props => props.theme["base-button"]};
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;

    img {
        width: 65px;
        height: 65px;
    }
`

export const DetailsCoffee = styled.div`
    width: 100%;
    
    div:first-child {
        display: flex;
        justify-content: space-between;

        span:first-child {
            color: ${props => props.theme["base-subtitle"]};
        }

        span:last-child {
            color: ${props => props.theme["base-text"]};
            font-weight: bold;
        }
    }

    div:last-child {
        display: flex;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }
`

export const ButtonDelete = styled.button`
    background-color: ${props => props.theme["base-button"]};  
    border: none;
    padding: 0.5rem;
    text-transform: uppercase;
    font-size: 0.75rem;
    cursor: pointer;
    color: ${props => props.theme["base-text"]};
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 6px;

    > svg {
        line-height: 0;
        color: ${props => props.theme.purple};
    }

    &:hover {
        background-color: ${props => props.theme["base-hover"]};
    }
`

export const ButtonConfirm = styled.button`
    width: 100%;
    background-color: ${props => props.theme.yellow};
    color: ${props => props.theme.white};
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme["yellow-dark"]};
    }

    &:disabled {
        background-color: ${props => props.theme["yellow-light"]};
        cursor: auto;
    }
`

export const TotalItems = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme["base-text"]};
    line-height: 130%;
    margin-bottom: 0.75rem;

    span:first-child {
        font-size: 0.875rem;
    }
`

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme["base-subtitle"]};
    line-height: 130%;
    margin-bottom: 1.5rem;
    font-weight: bold;
    font-size: 1.25rem;
`

export const NoCoffeeSelected = styled.span`
    color: ${props => props.theme["base-text"]};
    font-size: 1rem;
    display: block;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme["base-button"]};
`