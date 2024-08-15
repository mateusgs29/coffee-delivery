import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Title } from "../../styles";
import { CardContainer, FormAddress, FormPayment, HeaderCard, InfoCard, InputOptional, InputRadio, InputText } from "./styles";

export function AddressForm() {
    return (
        <div>
            <Title>Complete seu pedido</Title>

            <CardContainer>
                <HeaderCard colorIcon="yellow">
                    <MapPinLine size={25} />
                    
                    <InfoCard>
                        <h4>Endereço de Entrega</h4>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </InfoCard>
                </HeaderCard>

                <FormAddress>
                    <InputText gridArea="cep" type="text" placeholder="CEP" />
                    <InputText gridArea="rua" type="text" placeholder="Rua" />
                    <InputText gridArea="numero" type="text" placeholder="Número" />
                    <InputOptional>
                        <InputText gridArea="complemento" type="text" placeholder="Complemento" />
                        <span>Opcional</span>
                    </InputOptional>
                    <InputText gridArea="bairro" type="text" placeholder="Bairro" />
                    <InputText gridArea="cidade" type="text" placeholder="Cidade" />
                    <InputText gridArea="uf" type="text" placeholder="UF" />
                </FormAddress>
            </CardContainer>

            <CardContainer>
                 <HeaderCard colorIcon="purple">
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
                                name="pagamento" 
                                value="credito" 
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
                                name="pagamento" 
                                value="debito" 
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
                                name="pagamento" 
                                value="dinheiro" 
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