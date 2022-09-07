import '../css/ItemDetailContainer.css'
import '../App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { DotPulse } from '@uiball/loaders'
import database from '../database/firestore';
import { getDoc, doc, collection } from 'firebase/firestore';


function ItemDetailContainer() {
    const [data, setData] = useState([]);
    const id = useParams().id;

function getProducts(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            const foodCollection = collection(database, 'comida');
            const docRef = doc(foodCollection, id);
            getDoc(docRef).then(docsSnapshot => {
                resolve(
                    {...docsSnapshot.data(), id: docsSnapshot.id}
                );
            });
        }, 1500)
    });
};

    useEffect(() => {
        getProducts().then((resp) => {
        setData(resp);
        });
    }, []);



return (
    <>
        {data.length === 0 ?
        <div className='loader'>
            <DotPulse 
            size={80}
            speed={1} 
            color="black" 
            />
        </div>
        : 
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
        }
    </>
);
};



export default ItemDetailContainer;