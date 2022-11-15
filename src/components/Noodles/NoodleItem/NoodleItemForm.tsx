// Import dependencies
import * as React from "react";

// Import Common & style.
import Input from "../../Common/Input";
import './item.css';

const NoodleItemForm = (props: any) => {
    const [isValAmount, setIsValAmount] = React.useState(true);
    const refInputAmount = React.useRef<HTMLInputElement>(null);

    const handleEventSubmit = (event: any) => {
        event.preventDefault();
        const keyboardAmount = refInputAmount.current?.value;
        let keyboardAmountNumber = 1;

        if (keyboardAmount) {
            keyboardAmountNumber = +keyboardAmount;
            if (keyboardAmount.trim().length === 0 || keyboardAmountNumber < 1 || keyboardAmountNumber > 5) {
                setIsValAmount(false);
                return;
            }
        }
        props.handleToAddCart(keyboardAmountNumber);
    };

    return (
        <form className="form" onSubmit={handleEventSubmit}>
            <Input
                ref={refInputAmount}
                label="Amount"
                input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+ Add</button>
            {!isValAmount && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};

export default NoodleItemForm;