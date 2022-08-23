import '../css/ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import ItemList from './ItemList';


function ItemListContainer() {
    const [data, setData] = useState([]);
    const category = useParams().category;


function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Item), 200);
    })
};

    useEffect(() => {
        getProducts().then(resp => {
            let filtro = Item.filter ( (producto) => producto.category === category )
            if (category === undefined){
                setData(resp);
            }else{
                setData(filtro);
            }
        });
    }, [category]);

return (
    <>
    <div className="ItemListContainer">
        {data.map((item) => {
            return (
                <ItemList
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                imgurl={item.imgurl}
                stock={item.stock}
                category={item.category}
                carrito={item.carrito}
                />
                );
                
            })}
    </div>
    </>
);
};


export default ItemListContainer;