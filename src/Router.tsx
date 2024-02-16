import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { DefaultLayout } from "./layout/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/pedido" element={<Order />} />
            </Route>
        </Routes>
    )
}