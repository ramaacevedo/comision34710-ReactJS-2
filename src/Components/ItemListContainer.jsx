import '../css/ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import database from '../database/firestore';
import { getDocs, collection, query, where } from 'firebase/firestore';


function ItemListContainer() {
    const [data, setData] = useState([]);
    const category = useParams().category;

function getProducts() {
    return new Promise((resolve) => {
        const foodCollection = collection(database, 'comida');
        getDocs(foodCollection).then(docsSnapshot => {
            const docsData = docsSnapshot.docs.map( doc => {
                return {...doc.data(), id: doc.id};
            });
            resolve(docsData);
        });
    });
};

function getProductsCategory ( categoryParam ) {
    return new Promise((resolve) => {
        const foodCollection = collection(database, 'comida');
        const q = query(foodCollection, where('category', '==', categoryParam))
        getDocs(q).then(docsSnapshot => {
            const docsData = docsSnapshot.docs.map( doc => {
                return {...doc.data(), id: doc.id};
            });
            resolve(docsData);
        });
    });
};

    useEffect(() => {
        getProducts().then(resp => {
            if (category === undefined){
                setData(resp);
            }else{
                getProductsCategory(category).then((resp) => {
                    setData(resp);
                })
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