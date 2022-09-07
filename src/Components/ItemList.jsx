import { NavLink } from 'react-router-dom';
import '../css/ItemList.css';

function ItemList({id, name, price, imgurl, stock}){
    
    if(stock == 0){
        console.log(`${name} sin stock`);
    }else{
        return(
            <div className="ItemList"> 
                <div className="ItemList-img">
                <img src={imgurl} alt="imagen" />
                </div>
                <div className="ItemList-info">
                <h2>{name}</h2>
                <h4>Precio: $ {price}</h4>
                <h5>Stock: {stock}</h5>
                <NavLink style={(isActive) => isActive ? {textDecoration: 'none'} : undefined} className="btn btn-outline-info m-1" to={`/detalle/${id}`}>Ver más</NavLink>
                </div>
            </div>
        )
    }
};

export default ItemList;