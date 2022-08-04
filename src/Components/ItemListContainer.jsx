import '../App.css'
import { useEffect, useState } from 'react';
import Item from './Item';
import ItemList from './ItemList';


function getProducts(){
    return new Promise( (resolve) =>{
        setTimeout( () => resolve(Item), 2000);
    })
};

function ItemListContainer(props){
    const [data, setData] = useState([]);

    useEffect( () => {
        getProducts().then( (resp) =>{
            setData(resp);
        });
    }, []);
    
    return(
    <>
    <h1 className="h1"> {props.greeting} </h1>
    <div>
        <ItemList 
            key={data.id}
            name={data.name}
            price={data.price}
            imgurl={data.imgurl}
            stock={data.stock}
        />
    </div>
    </>
    )
}


export default ItemListContainer;