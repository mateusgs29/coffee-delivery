import { AddressForm } from "./fragments/AddressForm";
import { DetailsOrder } from "./fragments/DetailsOrder";
import { OrderContainer } from "./styles";

export function Order() {
    return (
        <OrderContainer>
            <AddressForm />

            <DetailsOrder />
        </OrderContainer>
    )
}