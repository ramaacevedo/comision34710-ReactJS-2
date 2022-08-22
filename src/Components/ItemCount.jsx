import React, { useState } from 'react';


function ItemCount(props){

    const[clicks, setClicks] = useState(1);


    const[botonSumaActivo, setBotonSumaActivo] = useState(false);
    const[botonRestaActivo, setBotonRestaActivo] = useState(false);
    
    function handleIncrement(){
        setClicks(clicks + 1);
        setBotonRestaActivo(true)
        {clicks < props.stock - 1 ? console.log('Agregado al carrito') : setBotonSumaActivo(true)} 
}
    
    function handleDecrement(){
        setClicks(clicks - 1)
        setBotonSumaActivo(false)
        {clicks > props.initial + 1 ? console.log('Quitado del carrito') : setBotonRestaActivo(false)}
    }

    function resetConunter(){
        setClicks(1);
        setBotonSumaActivo(false);
        setBotonRestaActivo(false);
    }

    function handleClicks (){
        props.onAdd(clicks);
    }

    return(
        <div className="carritoCompras justify-content-center">
        <div className="botonesSumarRestar">
        <button disabled={botonSumaActivo} type="button" className="btn btn-outline-info m-1" onClick={ handleIncrement }> + </button>
        <button disabled={!botonRestaActivo} type="button" className="btn btn-outline-info m-1" onClick={ handleDecrement }> - </button>
        <button type="button" className="btn btn-outline-info m-1" onClick={ resetConunter }> Reset </button>
        </div>
        <div className="">
        <button type="button" className="btn btn-outline-primary m-1" onClick={ handleClicks }> Agregar al carrito </button>
        <button type="button" className="btn btn-outline-primary m-1"><i className="bi bi-cart4 me-1"></i><span className="badge bg-light text-primary">{clicks}</span></button>
        </div>
        </div>
    )
}

export default ItemCount;