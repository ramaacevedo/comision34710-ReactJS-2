import useContext, {userContext} from "../store/CartContext";

const CartItems = ({foodAdd}) => {

    const {removeItem, id } = useContext(userContext);

    return (
            <>
                <div className="divItems"> 
                <div className="item-img">
                    <img src={foodAdd.imgurl} />
                </div>
                <div>
                    <p>Producto: {foodAdd.name}</p>
                    <p>Cantidad: {foodAdd.quantity}</p>
                    <p>Precio: ${foodAdd.price}</p>
                    <p>Subtotal: ${foodAdd.quantity * foodAdd.price}</p>
                    <button onClick={() => removeItem(id)}>Borrar</button>
                </div>
                </div>
            </>
    )
}

export default CartItems;