import ItemCount from './ItemCount';

const Item = [{
    id: 1,
    name: 'Pizzas',
    price: 500,
    imgurl: 'https://dummyimage.com/280x260/000/fff',
    stock: 45,
    carrito: <ItemCount stock={10} initial={1} />
},{
    id: 2,
    name: 'Hamburguesas',
    price: 900,
    imgurl: 'https://dummyimage.com/280x260/000/fff',
    stock: 20,
    carrito: <ItemCount  stock={10} initial={1} />
},{
    id: 3,
    name: 'Tacos',
    price: 200,
    imgurl: 'https://dummyimage.com/280x260/000/fff',
    stock: 30,
    carrito: <ItemCount  stock={10} initial={1} />
},{
    id: 4,
    name: 'Pastas',
    price: 850,
    imgurl: 'https://dummyimage.com/280x260/000/fff',
    stock: 20,
    carrito: <ItemCount  stock={10} initial={1} />
},{
    id: 5,
    name: 'Tartas',
    price: 550,
    imgurl: 'https://dummyimage.com/280x260/000/fff',
    stock: 25,
    carrito: <ItemCount  stock={10} initial={1} />
},{
    id: 6,
    name: 'Milanesas',
    price: 760,
    imgurl: 'https://dummyimage.com/280x260/000/fff',
    stock: 40,
    carrito: <ItemCount  stock={10} initial={1} />
}];


export default Item;