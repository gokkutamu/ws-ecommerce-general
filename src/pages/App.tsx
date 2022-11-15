// Import dependencies
import * as React from "react";

// Import cart, header & noodles
import Cart from "../components/Modules/Cart";
import Header from "../components/Layouts/Header";
import Noodles from "../components/Noodles/Noodles";

const App = () => {
    const [showCart, setShowCart] = React.useState(false);

    const handleShow = () => {
        setShowCart(true);
    };

    const handleHidden = () => {
        setShowCart(false);
    };

    return (
        <React.Fragment>
            {showCart && <Cart onHideCart={handleHidden} />}
            <Header onShowCart={handleShow} />
            <main><Noodles/></main>
        </React.Fragment>
    );
};

export default App;
