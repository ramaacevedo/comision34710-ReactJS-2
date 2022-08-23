import '../css/CartView.css'
import { useContext } from "react";
import { userContext } from "../store/CartContext";
import CartItems  from './CartItems';
import { Link } from 'react-router-dom';

function CartView(id){

    const {cart, clearCart, removeItem, totalPrice} = useContext(userContext);

    function terminarCompra(){
        alert('compra finalizada');
        clearCart();
    }

    function removeItemCart() {
        removeItem(id)
    }
    return(
        <>
        { cart.length === 0 ? ( 
                
            <div className="noHayPedidos">
                    <p>No hay ningun pedido en el carrito</p>
                    <Link to='/'><p>Ir al menú</p></Link>
            </div>
            ) : (
                <>
                    <div className='CartView'>
                    {cart.map((item) => {
                        return (
                            <CartItems
                            key={item.id}
                            imgurl={item.imgurl}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            removeItemCart={removeItemCart}
                        />
                        )
                    })}
                    </div>
                    <div className='precioTotal'>
                        <p>Subtotal: ${totalPrice()} + IVA</p>
                        <p>Total: ${totalPrice() * 1.21} FINAL</p>
                        <button onClick={() => clearCart([])}>Vaciar carrito</button>
                        <button onClick={() => terminarCompra([])}>Terminar mi compra</button>
                    </div>
                    </>
            )}
            </>
    )
}

export default CartView;