import { FormProvider, useForm } from "react-hook-form";
import { AddressForm } from "./fragments/AddressForm";
import { DetailsOrder } from "./fragments/DetailsOrder";
import { OrderContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CoffeesContext } from "../../context/CoffeesContext";

const validationSchema = zod.object({
    cep: zod.string().min(9).max(9),
    rua: zod.string().min(1, 'Rua é obrigatória'),
    numero: zod.string().min(1, 'Número é obrigatório'),
    complemento: zod.string().optional(),
    bairro: zod.string().min(1, 'Bairro é obrigatório'),
    cidade: zod.string().min(1, 'Cidade é obrigatória'),
    uf: zod.string().min(1, 'UF é obrigatória'),

    pagamento: zod.string().min(1, 'Forma de pagamento é obrigatória')
})

type FormData = zod.infer<typeof validationSchema>;

export function Order() {
    const { finishOrder, address, payment } = useContext(CoffeesContext);
    
    const newAddressForm = useForm<FormData>({
        resolver: zodResolver(validationSchema),
        defaultValues: {
            cep: address.cep || '',
            rua: address.rua || '',
            numero: address.numero || '',
            complemento: address.complemento || '',
            bairro: address.bairro || '',
            cidade: address.cidade || '',
            uf: address.uf || '',

            pagamento: payment || ''
        }
    })

    const navigate = useNavigate();

    const confirmOrder = (data: FormData) => {
        finishOrder({
            cep: data.cep,
            rua: data.rua,
            numero: data.numero,
            complemento: data.complemento ?? "",
            bairro: data.bairro,
            cidade: data.cidade,
            uf: data.uf
        }, data.pagamento)

        navigate("/pedido-confirmado");
    }

    return (
        <form onSubmit={newAddressForm.handleSubmit(confirmOrder)}>
            <FormProvider {...newAddressForm}>
                <OrderContainer>
                    <AddressForm />

                    <DetailsOrder />
                </OrderContainer>
            </FormProvider>
        </form>
    )
}