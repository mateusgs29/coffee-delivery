import styled from "styled-components";

export const OrderContainer = styled.div`
    display: grid;
    grid-template-columns: 55% 1fr;
    gap: 2rem;
    padding-top: 2rem;

    @media (max-width: 820px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`

export const Title = styled.h2`
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: bold;
    color: ${props => props.theme["base-subtitle"]};
`