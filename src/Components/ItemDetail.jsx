import Item from './Item';
import ItemCount from './ItemCount';

function ItemDetail({id, name, price, imgurl, stock, carrito}){
    return(
        <div> 
            <p>{id}</p>
            <img src={imgurl} alt="imagen" />
            <h2>{name}</h2>
            <h4>Precio: $ {price}</h4>
            <h5>Stock: {stock}</h5>
            <p>{carrito}</p>
            <hr />
        </div>
    )
};

export default ItemDetail;