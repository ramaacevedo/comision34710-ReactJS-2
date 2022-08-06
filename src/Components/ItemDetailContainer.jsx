import '../App.css'
import { useEffect, useState } from 'react';
import Item from './Item';
import ItemDetail from './ItemDetail';



async function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Item[0]), 2000);
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
            <ItemDetail
                key={data.id}
                name={data.name}
                price={data.price}
                imgurl={data.imgurl}
                stock={data.stock}
                carrito={data.carrito}
            />
    </div>
    </>
);
};


export default ItemListContainer;