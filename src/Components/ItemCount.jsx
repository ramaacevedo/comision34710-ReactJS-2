import React, {useState} from 'react';


function ItemCount(props){

    const[Clicks, setClicks] = useState(1);
    const[botonSumaActivo, setBotonSumaActivo] = useState(false);
    const[botonRestaActivo, setBotonRestaActivo] = useState(false);
    
    function handleIncrement(){
        setClicks(Clicks + 1);
        setBotonRestaActivo(false)
        {Clicks < props.stock - 1 ? console.log('Agregado al carrito') : setBotonSumaActivo(true)} 
}
    
    function handleDecrement(){
        setClicks(Clicks - 1)
        setBotonSumaActivo(false)
        {Clicks > props.initial + 1 ? console.log('Quitado del carrito') : setBotonRestaActivo(true)}
    }

    function resetConunter(){
        setClicks(1);
        setBotonSumaActivo(false);
        setBotonRestaActivo(true);
    }

    function onAdd (){
        setClicks(1);
        alert(`${Clicks} elementos agregados al carrito`)
    }

    return(
        <div className="carritoCompras justify-content-center">
        <div className="botonesSumarRestar">
        <button disabled={botonSumaActivo} type="button" className="btn btn-outline-info m-1" onClick={ handleIncrement }> + </button>
        <button disabled={botonRestaActivo} type="button" className="btn btn-outline-info m-1" onClick={ handleDecrement }> - </button>
        <button type="button" className="btn btn-outline-info m-1" onClick={ resetConunter }> Reset </button>
        </div>
        <div className="">
        
        <button type="button" className="btn btn-outline-primary m-1" onClick={ onAdd }> Agregar al carrito </button>
        <button type="button" className="btn btn-outline-primary m-1"><i className="bi bi-cart4 me-1"></i><span className="badge bg-light text-primary">{Clicks}</span></button>
        </div>
        </div>
    )
}

export default ItemCount;