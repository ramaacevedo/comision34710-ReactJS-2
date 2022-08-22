import { createContext, useState } from 'react';

export const userContext = createContext([]);

export function CartContext({children}){

    const [cart, setCart] = useState([]);
    
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
        cart.some(foodAdd => foodAdd.id === id);
    };

    function removeItem(id){
        setCart(cart.filter(foodAdd => foodAdd.id !== id))
    };

    function totalPrice (){
        cart.reduce((prev, act) => prev + act.quantity * act.precio, 0 );
    };

    function clearCart(){
        setCart([]);
    };

    return(
    <userContext.Provider value={{cart, addItem, isInCart, removeItem, totalPrice, clearCart}}>
    {children}
    </userContext.Provider>
    )
};


export default CartContext;