import { ChangeEvent, useState } from "react";
import { InputNumberContainer } from "./styles";
import { Minus, Plus } from "phosphor-react";

interface InputNumberProps {
    min?: number;
    max?: number;
    value: number;
    onChange: (value: number) => void;
}

export function InputNumber({ value, onChange, min = 1, max = 99 }: InputNumberProps) {
    const [qtd, setQtd] = useState(value)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const valueInput = event.target.valueAsNumber
        
        if (valueInput >= (min - 1) && valueInput < (max + 1)) {
            setQtd(valueInput)           
            onChange(valueInput)
        }
    }

    const handleChangeByClick = (type: 'plus' | 'minus') => {
        const newQtd = type === 'plus' ? qtd + 1 : qtd - 1

        setQtd(newQtd)
        onChange(newQtd)
    }

    return (
        <InputNumberContainer>
            <button type="button" onClick={() => handleChangeByClick('minus')} disabled={qtd <= min}>
                <Minus weight="bold" />
            </button>

            <input 
                type="number" 
                min={min} 
                max={max}
                value={qtd} 
                onChange={handleChange} 
            />

            <button type="button" onClick={() => handleChangeByClick('plus')} disabled={qtd >= max}>
                <Plus weight="bold" />
            </button>
        </InputNumberContainer>
    )
}