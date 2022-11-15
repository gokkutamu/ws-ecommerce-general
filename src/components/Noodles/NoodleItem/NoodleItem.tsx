// Import slice & hook
import { useAppDispatch } from "../../../app/hook";
import { createNoodle } from "../../../app/slice";

// Import style.css
import NoodleItemForm from "./NoodleItemForm";
import './item.css';

const NoodleItem = (props: any) => {
    const dispatch = useAppDispatch();
    const noodle = props.item;
    const price = `${noodle.price.toFixed(2)}`;

    const handleToAddCart = (amount: number) => {
        const newNoodle = {
            ...noodle,
            amount: amount
        };
        dispatch(createNoodle(newNoodle));
    }

    return (
        <li className="noodle">
            <div>
                <h3>{noodle.name}</h3>
                <div className="description">{noodle.description}</div>
                <div className="price">{price}</div>
            </div>
            <div><NoodleItemForm handleToAddCart={handleToAddCart} /></div>
        </li>
    );
};

export default NoodleItem;