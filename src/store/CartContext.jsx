import { createContext, useState } from 'react';
import swal from 'sweetalert';

export const userContext = createContext([]);

export function CartContext({children}){
    
    const [cart, setCart] = useState([]);
    let copyCart = [...cart];

    function addItem(item, quantity){
        if(isInCart(item.id)){
            setCart(cart.map(foodAdd => {
            return foodAdd.id === item.id ? {...foodAdd, quantity: foodAdd.quantity + quantity} : foodAdd 
        }));
    } else {
        setCart([...cart, {...item, quantity: quantity}])
    }
    };

    function isInCart(id) {
        return (cart.some((foodAdd) => foodAdd.id === id))
    };

    function totalPrice(){
        let total = 0;
        cart.map((item) => total += item.price * item.quantity);
        return total;
    };

    function totalQuantity() {
        let quantityItem = 0;
        cart.map(item => quantityItem += item.quantity);
        return quantityItem;
    }

        function removeItem() {
        const indexItem = copyCart.indexOf()
        copyCart.splice(indexItem, 1)
        setCart(copyCart)
    }

    function clearCart(){
        swal({
            title: "Se vaciará el Carrito",
            text: "¿Desea continuar?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
                if(`${totalQuantity()}` == 1){
                    if (willDelete) {
                        swal(`Se ha eliminado ${totalQuantity()} item del Carrito`, {
                            icon: "success",
                        });
                        setCart([])
                        } else {
                        swal(`${totalQuantity()} items en el Carrito`);
                        }
                }else{
                    if (willDelete) {
                        swal(`Se han eliminado ${totalQuantity()} items del Carrito`, {
                            icon: "success",
                        });
                        setCart([])
                        } else {
                        swal(`${totalQuantity()} items en el Carrito`);
                        }
                }
            });
    };

    function clearCartFinish(){
        setCart([])
    }

    return(
    <userContext.Provider value={{cart, addItem, isInCart, totalPrice, totalQuantity, removeItem, clearCart, clearCartFinish}}>
    {children}
    </userContext.Provider>
    )
};

export default CartContext;