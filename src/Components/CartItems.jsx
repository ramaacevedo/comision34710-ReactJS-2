import React from 'react'

const CartItems = ({id, name, price, imgurl, quantity, removeItemCart}) => {

    return (
            <>
                <div className="divItems"> 
                <div className="item-img">
                    <img src={imgurl} />
                </div>
                <div className='CartItems'>
                    <p>Producto: {name}</p>
                    <p>Cantidad: {quantity}</p>
                    <p>Precio: ${price} + IVA</p>
                    <p>Subtotal: ${quantity * price} + IVA</p>
                    <button onClick={() => removeItemCart(id)}>Borrar</button>
                </div>
                </div>
            </>
    )
}

export default CartItems;