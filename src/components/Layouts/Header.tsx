// Import dependencies
import * as React from "react";

// Import css and images.
import './headers.css';
import HeaderCartButton from "./HeaderCartButton";
const noodleImg = '../../assets/images/noodles.jpg';

const Header = (props: any) => {
    return (
        <React.Fragment>
            <header className="header">
                <h1>Noodles</h1>
                <HeaderCartButton  onClick={props.onShowCart} />
            </header>
            <div className="main-image">
                <img src={`https://cdnimg.webstaurantstore.com/images/blogs/3914/blog_noodles_main_header.jpg`} alt="a noodle" />
            </div>
        </React.Fragment>
    );
}

export default Header;