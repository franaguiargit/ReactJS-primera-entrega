import './ItemDetail.css'
import Contador from '../Contador/Contador';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';


const ItemDetail = ({ id, nombre, precio, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        //console.log("Productos Agregados: "+ cantidad)

        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at minima, quaerat rerum vel adipisci, quod fugiat fuga earum perspiciatis veritatis? Deleniti quod sint fugit dolores sunt magni odit fugiat!</p>
            <img src={img} alt={nombre} />
            {
                agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}></Contador>)
            }
        </div>
    );
}

export default ItemDetail;
