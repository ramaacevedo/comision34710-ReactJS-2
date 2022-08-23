import { Link } from 'react-router-dom';
import '../css/ItemList.css';

function ItemList({id, name, price, imgurl, stock}){
    return(
        <div className="ItemList"> 
            <div className="ItemList-img">
            <img src={imgurl} alt="imagen" />
            </div>
            <div className="ItemList-info">
            <h2>{name}</h2>
            <h4>Precio: $ {price}</h4>
            <h5>Stock: {stock}</h5>
            <Link to={`/detalle/${id}`}>Ver más</Link>
            </div>
        </div>
    )
};

export default ItemList;