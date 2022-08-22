import { createContext, useState } from 'react';

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
        cart.some(foodAdd => foodAdd.id === id);
    };

    function totalPrice (){
        cart.reduce((prev, act) => prev + act.quantity * act.precio, 0 );
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
        setCart([]);
    };

    return(
    <userContext.Provider value={{cart, addItem, isInCart, removeItem, totalPrice, totalQuantity, clearCart}}>
    {children}
    </userContext.Provider>
    )
};

export default CartContext;