import styled from "styled-components";

export const Title = styled.h2`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${props => props.theme["base-subtitle"]};
    margin-bottom: 3rem;
`

export const CoffeesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;

    @media (max-width: 1000px) {
        gap: 2rem 1rem;
    }

    @media (max-width: 920px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`