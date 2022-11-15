// Import dependencies
import * as React from "react";

// Import styles.
import './common.css';

const Card = (props: any) => {
    return <div className="card">{props.children}</div>;
};

export default Card;