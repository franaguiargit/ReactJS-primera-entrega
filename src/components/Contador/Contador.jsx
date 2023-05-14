import { useState } from "react";

const Contador = ({stock, inicial}) => {
    const [contador, setContador] = useState(inicial);

    const agregarAlCarrito = () => {
        console.log(`Agregado ${contador} items `);
    }


const aumentarContador = () => {
    if(contador < stock) {
        setContador(contador + 1);
    }
}

const disminuirContador = () => {
    if(contador > inicial) {
        setContador(contador - 1);
    }
}

return(
    <div>
        <button onClick={ disminuirContador}> - </button>
        <strong> {contador} </strong>
        <button onClick={ aumentarContador}> + </button>
        <br /><br />

        <button onClick={agregarAlCarrito}> Agregar al carrito</button>
    </div>
)
}


export default Contador
