import { useState, useContext } from 'react';
import { userContext } from '../store/CartContext';
import { NavLink } from 'react-router-dom'
import ItemCount from './ItemCount';


function ItemDetail({id, name, price, imgurl, stock}){
    
    const[quantityToAdd, setQuantityToAdd] = useState(1);

    const {addItem} = useContext(userContext);

    function handelAdd(quantity){
        addItem({id, name, price, imgurl}, quantity)
        setQuantityToAdd (quantity);
    }

    return(
        <div> 
            <img src={imgurl} alt="imagen" />
            <h2>{name}</h2>
            <h4>Precio: $ {price}</h4>
            <h5>Stock: {stock}</h5>

            {quantityToAdd === 1 ?
            <ItemCount stock={10} initial={1} onAdd={handelAdd} />
            : <NavLink style={(isActive) => isActive ? {textDecoration: 'none'} : undefined} className="btn btn-outline-info m-1" to='/cart'  >Ir al carrito</NavLink>
            }
            <hr />
        </div>
    )
};

export default ItemDetail;