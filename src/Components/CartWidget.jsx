import { useContext, useState } from 'react';
import {userContext} from '../store/CartContext';
import { Link } from 'react-router-dom';

function CartWidget(){

    return(
    
    <div className="flex-row-reverse me-4">
    <Link to='/cart'>
    <button type="button" className="btn btn-secondary">
    <i className="bi bi-cart4"></i><span className="badge bg-secondary"></span>
    </button>
    </Link>
    </div>
    )
}

export default CartWidget;