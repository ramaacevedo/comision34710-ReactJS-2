import React from 'react'
import useContext, {userContext} from "../store/CartContext";

const CartItems = ({id, name, price, imgurl, quantity, removeItemCart}) => {

    return (
            <>
                <div className="divItems"> 
                <div className="item-img">
                    <img src={imgurl} />
                </div>
                <div>
                    <p>Producto: {name}</p>
                    <p>Cantidad: {quantity}</p>
                    <p>Precio: ${price}</p>
                    <p>Subtotal: ${quantity * price}</p>
                    <button onClick={() => removeItemCart(id)}>Borrar</button>
                </div>
                </div>
            </>
    )
}

export default CartItems;