// Import css
import './module.css';

const Item = (props: any) => {
    const item = props.item;
    const price = `${item.price.toFixed(2)}`;

    return (
        <li className="cart-item">
            <div>
                <h2>{item.name}</h2>
                <div className="summary-item">
                    <span className="price">{price}</span>
                    <span className="amount">x{item.amount}</span>
                </div>
            </div>
            <div className="actions1">
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default Item;