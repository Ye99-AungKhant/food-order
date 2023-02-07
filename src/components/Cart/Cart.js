import { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {

    const cartCtx = useContext(CartContext)

    const hasItem = cartCtx.items.length > 0

    const totalAmount = cartCtx.totalAmount.toFixed(2)

    const cartItems = (<ul className={classes['cart-items']}>
        {cartCtx.items.map((item) =>
            (<li key={item.id}>{item.name}</li>)
        )}</ul>)

    return (
        <Modal onClick={props.onCartHide}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Aamount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCartHide}>Close</button>
                {hasItem && (<button className={classes.button}>Order</button>)}
            </div>
        </Modal>
    )
}

export default Cart