import { ChangeEvent, useState } from "react";
import { InputNumberContainer } from "./styles";
import { Minus, Plus } from "phosphor-react";

export function InputNumber() {
    const [qtd, setQtd] = useState(1)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber
        
        if (value >= 0 && value < 100) {
            setQtd(value)
        }
    }

    return (
        <InputNumberContainer>
            <button type="button" onClick={() => setQtd(qtd - 1)} disabled={qtd <= 1}>
                <Minus weight="bold" />
            </button>

            <input 
                type="number" 
                min={1} 
                max={99}
                value={qtd} 
                onChange={handleChange} 
            />

            <button type="button" onClick={() => setQtd(qtd + 1)} disabled={qtd >= 99}>
                <Plus weight="bold" />
            </button>
        </InputNumberContainer>
    )
}