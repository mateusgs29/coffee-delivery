import styled from "styled-components";

export const InputNumberContainer = styled.div`
    display: inline-flex;

    > input {
        max-width: 2rem;
        color: ${props => props.theme["base-title"]};
        border: none;
        background-color: ${props => props.theme["base-button"]};
        text-align: center;
        padding: .5rem 0;
    }

    > input[type="number"] {
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
    }
    > input[type=number]::-webkit-inner-spin-button, 
    > input[type=number]::-webkit-outer-spin-button { 
       -webkit-appearance: none;
    }


    > button {
        line-height: 0;
        border: none;
        background-color: ${props => props.theme["base-button"]};  
        color: ${props => props.theme.purple}; 
        cursor: pointer;
        padding: 0.5rem;
    }

    > button:hover {
        color: ${props => props.theme["purple-dark"]};
    }

    button:first-child {
        border-radius: 6px 0 0 6px;
        padding-right: 0;
    }

    button:last-child {
        border-radius: 0 6px 6px 0;
        padding-left: 0;
    }

`