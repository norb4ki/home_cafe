import {Route, Routes} from "react-router-dom";
import {CART_PATH, HOME_PATH, MENU_PATH} from "./router/utils";
import HomePage from "./pages/home";
import MenuPage from "./pages/menu";
import CartPage from "./pages/cart";
import Navigation from "./components/navbar";
import NotFoundPage from "./pages/notFound";

const App = () => {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route index path={HOME_PATH} element={<HomePage/>}/>
                <Route path={CART_PATH} element={<CartPage/>}/>
                <Route path={MENU_PATH} element={<MenuPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
};

export default App;