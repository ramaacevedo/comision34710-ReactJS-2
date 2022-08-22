import { useContext } from "react";
import { userContext } from "../store/CartContext";
import CartItems  from './CartItems';
import { Link } from 'react-router-dom';

function CartView({foodAdd, id}){

    const {cart, clearCart, removeItem, totalPrice} = useContext(userContext);

    return(
        <>
        { cart.length === 0 ? ( 
                
            <div>
                    <p>No hay ningun pedido en el carrito</p>
                    <Link to='/'><p>Ir al menú</p></Link>
            </div>
            ) : (
                    <>
                    {
                        cart.map(foodAdd => <CartItems 
                            id={foodAdd.id} 
                            foodAdd={foodAdd}
                            />)
                    }
                    <button onClick={() => clearCart([])}>Vaciar carrito</button>
                        </>
            )}
            </>
    )
}

export default CartView;