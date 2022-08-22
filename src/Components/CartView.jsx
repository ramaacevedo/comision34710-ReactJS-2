import { useContext } from "react";
import { userContext } from "../store/CartContext";
import CartItems  from './CartItems';
import { Link } from 'react-router-dom';

function CartView(id){

    const {cart, clearCart, removeItem, totalPrice} = useContext(userContext);

    function removeItemCart() {
        removeItem(id)
    }

    return(
        <>
        { cart.length === 0 ? ( 
                
            <div>
                    <p>No hay ningun pedido en el carrito</p>
                    <Link to='/'><p>Ir al menú</p></Link>
            </div>
            ) : (
                    <>
                    {cart.map((item) => {
                        return (
                            <CartItems
                            key={item.id + item.name}
                            img={item.imgurl}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            removeItemCart={removeItemCart}
                        />
                        )
                    })}
                    {
                    }
                    <button onClick={() => clearCart([])}>Vaciar carrito</button>
                        </>
            )}
            </>
    )
}

export default CartView;