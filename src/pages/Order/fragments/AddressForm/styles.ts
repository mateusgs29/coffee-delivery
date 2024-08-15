import styled from "styled-components";

interface IHeaderCard {
    colorIcon: 'yellow' | 'purple';
} 

interface IInputText {
    gridArea: string;
}

export const CardContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px;
    margin-top: 1rem;

    @media (max-width: 768px) {
        padding: 2rem;
    }
`

export const HeaderCard = styled.div<IHeaderCard>`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    
    svg {
        color: ${props => {
            if (props.colorIcon === "yellow")
                return props.theme["yellow-dark"]

            if (props.colorIcon === "purple")
                return props.theme.purple
        }}
    }
`

export const InfoCard = styled.div`
    h4 {
        font-size: 1rem;
        font-weight: 500;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]}
    }

    p {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;
        color: ${props => props.theme["base-text"]};
    }
`

export const FormAddress = styled.form`
    display: grid;
    grid-template: 
        "cep null null"
        "rua rua rua"
        "numero complemento complemento"
        "bairro cidade uf"
        / 35% 1fr 10%;
    gap: 0.75rem;

    @media (max-width: 950px) {
        grid-template: 
            "cep cep"
            "rua numero"
            "complemento complemento"
            "bairro cidade"
            "uf null"
            / 50% 50%;
    }

    @media (max-width: 820px) {
        grid-template: 
            "cep"
            "rua"
            "numero"
            "complemento"
            "bairro"
            "cidade"
            "uf"
            / 1fr;
    }
`

export const InputText = styled.input<IInputText>`
    grid-area: ${props => props.gridArea};
    padding: 1rem;
    border: 1px solid ${props => props.theme["base-button"]};
    border-radius: 4px;
    background-color: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-text"]};
    position: relative;
    font-size: 0.875rem;

    &:active, &:focus {
        border-color: ${props => props.theme["yellow-dark"]};
    }
`

export const InputOptional = styled.div`
    grid-area: complemento;
    display: flex;
    align-items: center;
    position: relative;

    input {
        width: 100%;
        padding-right: 70px;
    }

    span {
        position: absolute;
        right: 1rem;
        font-size: 0.75rem;
        color: ${props => props.theme["base-label"]};
        font-style: italic;
    }
`

export const FormPayment = styled.form`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;

    @media (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`

export const InputRadio = styled.div`
    display: flex;
    
    input[type="radio"] {
        appearance: none;
        -webkit-appearance: none;
    }

    input[type="radio"]:checked + label {
        background-color: ${props => props.theme["purple-light"]};
        border: 1px solid ${props => props.theme.purple};
    }

    label {
        display: flex;
        background-color: ${props => props.theme["base-button"]};   
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        padding: 1rem;
        border-radius: 6px;
        cursor: pointer;

        > svg {
            color: ${props => props.theme.purple};
            line-height: 0;
        }

        > span {
            text-transform: uppercase;
            font-size: 0.75rem;
            color: ${props => props.theme["base-text"]};
        }

        &:hover {
            background-color: ${props => props.theme["base-hover"]};
        }
    }
`