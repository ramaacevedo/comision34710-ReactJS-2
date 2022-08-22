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


// export const userContext = createContext();

// export function CartContext({ children }) {
//     const [cart, setCart] = useState([]);
//     let copyCart = [...cart];
//     // funcion de agregar al carrito
//     function addItem(item, quantity) {
//         // si el producto extiste solo aumentar la cantidad
//         if (isInCart(item.id)) {
//             const itemIndex = findItem(item.id)
//             copyCart[itemIndex].quantity += quantity;
//             setCart(copyCart)
//         }
//         // si no existe pushearlo al carrito
//         else {
//             copyCart.push({ ...item, quantity });
//             item.stock-= quantity
//             setCart(copyCart)
//         }
//     }
//     // funcion para remover un item por su id
//     function removeItem(item) {
//         const itemRemove = findItem(item.id)
//         const indexItem = copyCart.indexOf(itemRemove)
//         copyCart.splice(indexItem, 1)
//         setCart(copyCart)
//     }
//     // funcion vaciar al carrito
//     function clearCart() {
//         copyCart = []
//         setCart(copyCart)
//     }
//     // funcion para sacar el total de productos agregados al carrito aunque esten repetidos
//     function totalQuantity() {
//         let quantityItem = 0;
//         cart.map(item => quantityItem += item.quantity);
//         return quantityItem;
//     }
//     // funcion que calcula el precio total
//     function totalPrice(){
//         let total = 0;
//         cart.map ((index) => total += index.price * index.quantity);
//         return total;
//     }
//     // funciones auxiliares
//     // funcion para revisar si existe el item
//     function isInCart(id) {
//         return (copyCart.some(itemInCart => itemInCart.id === Number(id)))
//     }
//     // funcion para buscar un item en base a su id
//     function findItem(id) {
//         return (copyCart.find(item => item.id === Number(id)))
//     }
//     return(
//     <userContext.Provider value={{cart, addItem, isInCart, removeItem, totalPrice, totalQuantity, clearCart}}>
//     {children}
//     </userContext.Provider>
//     );
// }


export default CartContext;