import styled from "styled-components"

export const CardCoffeeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme["base-card"]};
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 6px 36px;

    > img {
        width: fit-content;
        margin-top: -3rem;
    }

    > h4 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: bold;
        font-size: 1.25rem;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
        margin: .5rem 0;
        text-align: center;
    }

    > p {
        color: ${props => props.theme["base-label"]};
        font-size: 0.875rem;
        text-align: center;
        margin-bottom: 2rem;
    }
`

export const TagsCoffee = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: .75rem;

    > span {
        text-transform: uppercase;
        color: ${props => props.theme["yellow-dark"]};
        background-color: ${props => props.theme["yellow-light"]};
        border-radius: 100px;
        font-weight: bold;
        font-size: 0.625rem;
        padding: 0.3rem 0.5rem;
    }
`

export const FooterCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    > div {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    @media (max-width: 950px) {
        /* flex-direction: column; */
        gap: 1.5rem;
    }
`

export const PriceCoffee = styled.span`
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    color: ${props => props.theme["base-text"]};

    &::before {
        content: 'R$ ';
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
    }
`

export const ButtonCartCoffee = styled.button`
    background-color: ${props => props.theme["purple-dark"]};
    color: ${props => props.theme["base-card"]};
    line-height: 0;
    border: none;
    border-radius: 6px;
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.purple};
    }

    &:disabled {
        background-color: ${props => props.theme.purple};
        cursor: auto;
    }
`