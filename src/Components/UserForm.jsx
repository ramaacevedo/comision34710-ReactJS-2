import React, { useState, useContext } from "react";
import { userContext } from "../store/CartContext";
import { getDocs, collection, addDoc, query, where, writeBatch, documentId } from "firebase/firestore";
import swal from 'sweetalert';
import database from "../database/firestore";
import '../css/UserForm.css';


function UserForm({}) {
    const {cart, totalPrice, clearCart, clearCartFinish} = useContext(userContext);
    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        email: "",
        telefono: "",
    });
    
    const ordenDeCompra = {
        buyer: {...userData},
        items: [...cart],
        total: totalPrice(),
        date: new Date()
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        const collectionRef = collection(database, "ordenes");
        const docRef = await addDoc(collectionRef, ordenDeCompra);
        console.log(docRef);
        swal("Gracias por la compra", `Orden: ${docRef.id}`, "success");
        clearCartFinish();
        const collectionFood = collection(database, "comida");
        const arrayIds = cart.map((item) => item.id);
        const q = query(collectionFood, where(documentId(), "in", arrayIds));
        let batch = writeBatch(database);
        getDocs(q).then((response) => {
            response.docs.forEach((doc) => {
                const itemToUpdate = cart.find((prod) => prod.id === doc.id);
                if (doc.data().stock >= itemToUpdate.quantity) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.quantity,
                });
            }
        batch.commit();
        });
    });
    }

    function inputChangeHandler(evt) {
        const input = evt.target;
        const value = input.value;
        const inputName = input.name;
        let copyUserData = { ...userData };
        copyUserData[inputName] = value;
        setUserData(copyUserData);
    }

    return (
        <div className="form-container">
            <form  onSubmit={handleSubmit}>
                <div className="form-item">
                    <label htmlFor="name">Nombre</label>
                    <input
                        value={userData.name}
                        onChange={inputChangeHandler}
                        name="name"
                        type="text"
                        placeholder="Nombre"
                        required
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="surname">Apellido</label>
                    <input
                        value={userData.surname}
                        onChange={inputChangeHandler}
                        name="surname"
                        type="text"
                        placeholder="Apellido"
                        required
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="telefono">Telefono</label>
                    <input
                        value={userData.telefono}
                        onChange={inputChangeHandler}
                        name="telefono"
                        type="text"
                        placeholder="Telefono"
                        required
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input
                        value={userData.email}
                        onChange={inputChangeHandler}
                        name="email"
                        type="text"
                        placeholder="Correo"
                        required
                    />
                </div>
                <div>
                    <button className="btn btn-outline-dark m-1" onClick={handleSubmit}>Finalizar compra</button>
                    <button className="btn btn-outline-dark m-1" onClick={() => clearCart([])}>Vaciar Carrito</button>

                </div>
            </form>
        </div>
    );
}

export default UserForm;