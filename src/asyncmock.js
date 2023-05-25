const productos = [
    { nombre: "Mousepad Logitech G640", precio: 65, id: "1", img: "../img/Mousepadlogitech.webp", idCat: "4" },
    { nombre: "Mousepad Steelseries QcK Heavy", precio: 65, id: "2", img: "../img/MousepadSteelseries.webp", idCat: "4" },
    { nombre: "Mousepad ZOWIE G-SR-SE", precio: 65, id: "3", img: "../img/MousepadZowieGSRSE.webp", idCat: "4" },
    { nombre: "Mousepad Razer Gigantus V2", precio: 65, id: "4", img: "../img/MousepadRazerGigantusV2.webp", idCat: "4" },
    { nombre: "Mousepad ZOWIE G-SR", precio: 65, id: "5", img: "../img/MousepadZowieGSR.webp", idCat: "4" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id)
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria)
        }, 100)
    })
}
