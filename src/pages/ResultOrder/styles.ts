import styled from "styled-components";

interface IconListProps {
    coloricon: string;
}

export const Container = styled.div`
    padding-top: 2rem;
`

export const Title = styled.h2`
    font-family: 'Baloo 2', sans-serif;
    color: ${props => props.theme["yellow-dark"]};
    font-size: 2rem;
    font-weight: 900;
    line-height: 130%;

    @media (max-width: 768px) {
        text-align: center;
    }
`

export const Subtitle = styled.p`
    font-size: 1.25rem;
    color: ${props => props.theme["base-subtitle"]};

    @media (max-width: 768px) {
        text-align: center;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-top: 2rem;
    gap: 2rem;

    img {
        width: 100%;
        max-width: max-content;
        margin-left: auto;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1rem;
        
        img {
            width: 70%;
            min-width: 300px;
            margin: auto;
            order: -1;
        }
    }
`

export const ListResultOrder = styled.ul`
    list-style: none;
    padding: 2.5rem;
    border-radius: 6px 36px;
    position: relative;
    box-sizing: border-box;
    background-clip: padding-box;
    border: 1px solid transparent;
    background-color: white;
    width: 100%;
    max-width: 600px;

    &:before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -1px;
        border-radius: inherit; 
        background: linear-gradient(to right, #DBAC2C, #8047F8);
    }

    li {
        display: flex;
        gap: 0.75rem;
        
        &:not(:last-child) {
            margin-bottom: 2rem;
        }
    }

    @media (max-width: 950px) {
        padding: 2rem 1.5rem;
    }

    @media (max-width: 768px) {
        margin: auto;
    }
`

export const IconList = styled.div<IconListProps>`
    line-height: 0;
    padding: 5px;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme[props.coloricon]};
`

export const TextsList = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    color: ${props => props.theme["base-text"]};
`