import { useState, useContext } from 'react';
import { userContext } from '../store/CartContext';
import { NavLink } from 'react-router-dom';
import ItemCount from './ItemCount';


function ItemDetail({id, name, price, imgurl, stock}){
    
    const[quantityToAdd, setQuantityToAdd] = useState(0);
    const {addItem} = useContext(userContext);

    function handelAdd(quantity){
        addItem({id, name, price, imgurl, stock}, quantity)
        setQuantityToAdd(quantity);
    };

    return(
        <div> 
            <img src={imgurl} alt="imagen" />
            <h2>{name}</h2>
            <h4>Precio: $ {price}</h4>
            <h4>Stock: {stock}</h4>

            {quantityToAdd === 0 ?
            <ItemCount stock={stock} initial={1} onAdd={ handelAdd } />
            : <NavLink style={(isActive) => isActive ? {textDecoration: 'none'} : undefined} className="btn btn-outline-info m-1" to='/cart'  >Ir al carrito</NavLink>
            }
        </div>
    )
};

export default ItemDetail;