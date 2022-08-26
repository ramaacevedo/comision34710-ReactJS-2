import { useContext } from 'react';
import {userContext} from '../store/CartContext';
import { Link } from 'react-router-dom';

function CartWidget(){

    const {cart, totalQuantity} = useContext(userContext);

    return(
    
    <div className="flex-row-reverse me-4">
    <Link to='/cart'>
    {cart.length === 0 ?
            <span></span> :
            <button type="button" className="btn btn-secondary">
            <i className="bi bi-cart4"></i> {totalQuantity()}<span className="badge bg-secondary"></span>
            </button>
    }
    </Link>
    </div>
    )
}

export default CartWidget;