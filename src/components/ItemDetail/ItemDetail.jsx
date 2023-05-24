import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at minima, quaerat rerum vel adipisci, quod fugiat fuga earum perspiciatis veritatis? Deleniti quod sint fugit dolores sunt magni odit fugiat!</p>
            <img src={img} alt={nombre} />
        </div>
    );
}

export default ItemDetail;
