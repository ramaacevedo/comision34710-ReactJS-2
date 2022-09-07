import '../css/CartView.css';
import { useContext } from "react";
import { userContext } from "../store/CartContext";
import CartItems  from './CartItems';
import UserForm from './UserForm';
import { NavLink } from 'react-router-dom';

function CartView(id){

    const {cart, removeItem, totalPrice} = useContext(userContext);

    function removeItemCart() {
        removeItem(id)
    }
    return(
        <>
        { cart.length === 0 ? ( 
            <div className="noHayPedidos">
                    <h5>No hay ningun pedido en el carrito</h5>
                    <NavLink style={(isActive) => isActive ? {textDecoration: 'none'} : undefined} className="btn btn-outline-info m-1" to='/'>Ir al menú</NavLink>
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
                        <UserForm cart={cart} />
                    </div>
                    </>
            )}
            </>
    )
};

export default CartView;