import '../App.css'
import { useEffect, useState } from 'react';
import Item from './Item';
import ItemList from './ItemList';



async function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Item), 2000);
    })
};

function ItemListContainer(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts().then((resp) => {
            setData(resp);
        });
    }, []);

return (
    <>
    <h1 className="h1"> {props.greeting} </h1>
    <div className="d-flex justify-content-around">
        {data.map((item) => {
            return (
                <ItemList
                key={item.id}
                name={item.name}
                price={item.price}
                imgurl={item.imgurl}
                stock={item.stock}
                carrito={item.carrito}
                />
                );
                
            })}
    </div>
    </>
);
};


export default ItemListContainer;