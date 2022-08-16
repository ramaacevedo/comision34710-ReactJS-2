import { Link } from 'react-router-dom';

function ItemList({id, name, price, imgurl, stock}){
    return(
        <div className="divItems"> 
            <div className="item-img">
            <img src={imgurl} alt="imagen" />
            </div>
            <div className="item-info">
            <h2>{name}</h2>
            <h4>Precio: $ {price}</h4>
            <h5>Stock: {stock}</h5>
            <Link to={`/detalle/${id}`}>Ver más</Link>
            </div>
        </div>
    )
};

export default ItemList;