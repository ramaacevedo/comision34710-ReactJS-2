import '../css/ItemDetailContainer.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
    const [data, setData] = useState([]);
    const id = useParams().id;


function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Item[id]));
    })
};

    useEffect(() => {
        getProducts().then((resp) => {
            setData(resp);
        });
    }, []);

return (
    <>
    <div className="ItemDetailContainer">
            <ItemDetail
                key={data.id}
                id={data.id}
                name={data.name}
                price={data.price}
                imgurl={data.imgurl}
                stock={data.stock}
                category={data.category}
                carrito={data.carrito}
            />
    </div>
    </>
);
};



export default ItemDetailContainer;

// d-flex justify-content-around