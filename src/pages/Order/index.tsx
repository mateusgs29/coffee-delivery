import { AddressForm } from "./components/AddressForm";
import { DetailsOrder } from "./components/DetailsOrder";
import { OrderContainer } from "./styles";

export function Order() {
    return (
        <OrderContainer>
            <AddressForm />

            <DetailsOrder />
        </OrderContainer>
    )
}