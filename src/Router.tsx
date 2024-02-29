import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { DefaultLayout } from "./layout/DefaultLayout";
import { ResultOrder } from "./pages/ResultOrder";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/pedido" element={<Order />} />
                <Route path="/pedido-confirmado" element={<ResultOrder />} />
            </Route>
        </Routes>
    )
}