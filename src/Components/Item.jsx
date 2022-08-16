import ItemCount from './ItemCount';

const Item = [{
    id: 0,
    name: 'Pizzas',
    price: 500,
    category: 'para-3-personas',
    imgurl: 'https://dummyimage.com/280x260/000/fff',
    stock: 45,
    carrito: <ItemCount stock={10} initial={1} />
},{
    id: 1,
    name: 'Hamburguesas',
    price: 900,
    category: 'para-1-persona',
    imgurl: 'https://dummyimage.com/280x260/000/fff',
    stock: 20,
    carrito: <ItemCount  stock={10} initial={1} />
},{
    id: 2,
    name: 'Tacos',
    category: 'para-1-persona',
    price: 200,
    imgurl: 'https://dummyimage.com/280x260/000/fff',
    stock: 30,
    carrito: <ItemCount  stock={10} initial={1} />
},{
    id: 3,
    name: 'Pastas',
    category: 'para-1-persona',
    price: 850,
    imgurl: 'https://dummyimage.com/280x260/000/fff',
    stock: 20,
    carrito: <ItemCount  stock={10} initial={1} />
},{
    id: 4,
    name: 'Tartas',
    category: 'para-2-personas',
    price: 550,
    imgurl: 'https://dummyimage.com/280x260/000/fff',
    stock: 25,
    carrito: <ItemCount  stock={10} initial={1} />
},{
    id: 5,
    name: 'Milanesas',
    category: 'para-2-personas',
    price: 760,
    imgurl: 'https://dummyimage.com/280x260/000/fff',
    stock: 40,
    carrito: <ItemCount  stock={10} initial={1} />
}];


export default Item;