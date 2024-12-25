import {Link} from "react-router-dom";
import {CART_PATH, HOME_PATH, MENU_PATH} from "../../router/utils";


const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to={HOME_PATH}>Home</Link></li>
                <li><Link to={CART_PATH}>Cart</Link></li>
                <li><Link to={MENU_PATH}>Menu</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;