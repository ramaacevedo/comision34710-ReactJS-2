import React from 'react';
import '../css/CartItems.css';

const CartItems = ({id, name, price, imgurl, quantity, removeItemCart}) => {

    return (
            <>
                <div className="divItems"> 
                <div className="item-img">
                    <img src={imgurl} />
                </div>
                <div className='CartItems'>
                    <h3>{name}</h3>
                    <h5>Cantidad: {quantity}</h5>
                    <h5>Precio: ${price} + IVA</h5>
                    <h5>Subtotal: ${quantity * price} + IVA</h5>
                    <button onClick={() => removeItemCart(id)} className="btn btn-outline-info mt-3">Borrar</button>
                </div>
                </div>
            </>
    )
};

export default CartItems;