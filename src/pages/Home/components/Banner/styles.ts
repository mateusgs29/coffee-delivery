import styled from "styled-components";

export const BannerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 40%;
    margin: 4rem 0;
    gap: 2rem;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
`

export const TitleBanner = styled.h1`
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 900;
    color: ${props => props.theme["base-title"]};
    line-height: 130%;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 2.875rem;
        text-align: center;
    }
`

export const SubtitleBanner = styled.p`
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    line-height: 130%;

    @media (max-width: 768px) {
        font-size: 1.125rem;
        text-align: center;
    }
`

export const IconList = styled.span`
    line-height: 0;
    padding: 5px;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ListBenefits = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    margin-top: 3rem;

    li {
        display: flex;
        gap: 0.75rem;
        align-items: center;
        color: ${props => props.theme["base-text"]};

        &:nth-child(1) ${IconList} {
            background-color: ${props => props.theme["yellow-dark"]};
        }

        &:nth-child(2) ${IconList} {
            background-color: ${props => props.theme["base-text"]};
        }

        &:nth-child(3) ${IconList} {
            background-color: ${props => props.theme.yellow};
        }

        &:nth-child(4) ${IconList} {
            background-color: ${props => props.theme.purple};
        }
    }

    @media (max-width: 920px) {
        gap: 1rem;
    }

    @media (max-width: 768px) {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

`

export const ImageBanner = styled.img`
    max-width: 100%;
    height: auto;

    @media (max-width: 768px) {
        max-width: 50%;
        min-width: 250px;
    }
`