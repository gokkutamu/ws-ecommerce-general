// Import dependencies
import * as React from "react";

// Import Modal & Input.
import Modal from "../Common/Modal";

// Import styles and hooks & slice.
import Item from "./Item";
import INoodle from "../../types/INoodle";
import { useAppDispatch, useApSelector } from "../../app/hook";
import { createNoodle, removeNoodle, emptyCart } from "../../app/slice";
import './module.css';

const Cart = (props: any) => {
    const dispatch = useAppDispatch();
    const noodleState = useApSelector((state) => state.noodles);
    const noodles = noodleState.noodle;
    const hasNoodle = noodles.length > 0;
    const totalAmount = `${noodleState.total.toFixed(2)}`;

    const handleCartItemCreate = (noodle: INoodle) => {
        dispatch(createNoodle({...noodle, amount: 1 }));
    };

    const handleCartItemRemove = (id: string) => {
        dispatch(removeNoodle(id));
    };

    const handleCartItemEmpty = () => {
        dispatch(emptyCart());
    };

    const CartItem = (
        <ul className="cart-items">
            {noodles.map((item: INoodle) => {
                return (
                    <Item 
                        key={item.id}
                        item={item}
                        onAdd={handleCartItemCreate.bind(null, item)}
                        onRemove={handleCartItemRemove.bind(null, item.id)}
                    />
                );
            })}
        </ul>
    );

    return (
        <Modal onClose={props.onHideCart}>
            {!hasNoodle && (
                <p className="no-items">No Noodle in your cart.</p>
            )}
            {CartItem}
            <div className="total">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={props.onHideCart}>Close</button>
                {hasNoodle && (
                    <button className="button--empty" onClick={handleCartItemEmpty}>Empty</button>
                )}
                {hasNoodle && (
                    <button className="button" onClick={props.onHideCart}>Order</button>
                )}
            </div>
        </Modal>
    );
};

export default Cart;