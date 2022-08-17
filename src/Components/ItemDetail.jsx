import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import ItemCount from './ItemCount';

function ItemDetail({ name, price, imgurl, stock}){

    
    function handelAdd(Clicks){
        console.log('se agregaron', Clicks);
        setQuantityToAdd (quantityToAdd + 1);
    }

    const[quantityToAdd, setQuantityToAdd] = useState(1);

    
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