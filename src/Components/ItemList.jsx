import Item from './Item';

function ItemList({id, name, price, imgurl, stock}){
    return(
        <div> 
            <p>{id}</p>
            <img src={imgurl} alt="imagen" />
            <h2>{name}</h2>
            <h3>$ {price}</h3>
            <h3>{stock}</h3>
        </div>
    )
};

export default ItemList;