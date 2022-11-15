// Import dependencies.
import * as React from 'react';

// Import hooks, components and css
import { useApSelector } from '../../app/hook';
import './headers.css';

const HeaderCartButton = (props: any) => {
    const [itemAdded, setItemAdded] = React.useState(false);

    const noodles = useApSelector((state) => state.noodles.noodle);
    const cartNoodleCount = noodles.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    const btnClasses = `${['button']} ${itemAdded && ['bump']}`;

    React.useEffect(() => {
        setItemAdded(true);
        const timer = setTimeout(() => {
            setItemAdded(false);
        }, 300);

        return () => {
            clearInterval(timer);
        };
    }, [noodles]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className='icon'>
                
            </span>
            <span>Your Cart</span>
            <span className="badge">{cartNoodleCount}</span>
        </button>
    );
};

export default HeaderCartButton;
