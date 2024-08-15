import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Title } from "../../styles";
import { CardContainer, FormAddress, FormPayment, HeaderCard, InfoCard, InputOptional, InputRadio, InputText } from "./styles";
import { useFormContext } from "react-hook-form";

export function AddressForm() {
    const { register, setValue } = useFormContext();

    const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value.replace(/\D/g, '');
        const formattedValue = rawValue.replace(/(\d{5})(\d{1,3})/, '$1-$2');
    
        setValue('cep', formattedValue, { shouldValidate: true });
    }

    return (
        <div>
            <Title>Complete seu pedido</Title>

            <CardContainer>
                <HeaderCard coloricon="yellow">
                    <MapPinLine size={25} />
                    
                    <InfoCard>
                        <h4>Endereço de Entrega</h4>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </InfoCard>
                </HeaderCard>

                <FormAddress>
                    <InputText 
                        gridarea="cep" 
                        type="text" 
                        placeholder="CEP"
                        {...register('cep', {
                            required: 'Campo obrigatório',
                            pattern: {
                                value: /^[0-9]{5}-[0-9]{3}$/,
                                message: 'CEP inválido'
                            }
                        })}
                        onChange={handleCepChange}
                        maxLength={9}
                    />
                    <InputText 
                        gridarea="rua" 
                        type="text" 
                        placeholder="Rua"
                        {...register('rua')}
                    />
                    <InputText 
                        gridarea="numero" 
                        type="text" 
                        placeholder="Número"
                        {...register('numero')} 
                    />
                    <InputOptional>
                        <InputText 
                            gridarea="complemento" 
                            type="text" 
                            placeholder="Complemento" 
                            {...register('complemento')}
                        />
                        <span>Opcional</span>
                    </InputOptional>
                    <InputText 
                        gridarea="bairro" 
                        type="text" 
                        placeholder="Bairro"
                        {...register('bairro')} 
                    />
                    <InputText 
                        gridarea="cidade" 
                        type="text" 
                        placeholder="Cidade"
                        {...register('cidade')} 
                    />
                    <InputText 
                        gridarea="uf" 
                        type="text" 
                        placeholder="UF"
                        {...register('uf')}
                        maxLength={2}
                    />
                </FormAddress>
            </CardContainer>

            <CardContainer>
                 <HeaderCard coloricon="purple">
                    <CurrencyDollar size={25} />

                    <InfoCard>
                        <h4>Pagamento</h4>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </InfoCard>
                 </HeaderCard>

                 <FormPayment>
                        <InputRadio>
                            <input 
                                type="radio" 
                                id="credito" 
                                value="credito"
                                {...register('pagamento')}
                            />
                            <label htmlFor="credito">
                                <CreditCard size={20} />
                                <span>Cartão de crédito</span>
                            </label>
                        </InputRadio>
                        <InputRadio>
                            <input 
                                type="radio" 
                                id="debito" 
                                value="debito"
                                {...register('pagamento')} 
                            />
                            <label htmlFor="debito">
                                <Bank size={20} />
                                <span>Cartão de débito</span>
                            </label>
                        </InputRadio>
                        <InputRadio>
                            <input 
                                type="radio" 
                                id="dinheiro"
                                value="dinheiro"
                                {...register('pagamento')}
                            />
                            <label htmlFor="dinheiro">
                                <Money size={20} />
                                <span>Dinheiro</span>
                            </label>
                        </InputRadio>
                    </FormPayment>
            </CardContainer>
        </div>
    )
}