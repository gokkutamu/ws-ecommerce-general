// Import dependencies
import * as React from "react";

// Import styles.
import './common.css';

const Input = React.forwardRef((props: any, ref) => {
    return (
        <div className="input">
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;