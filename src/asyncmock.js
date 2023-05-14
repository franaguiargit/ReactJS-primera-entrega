const productos = [
    {nombre: "Mousepad Logitech G640", precio: 65, id: 1, img: "./img/Mousepadlogitech.webp"},
    {nombre: "Mousepad Steelseries QcK Heavy", precio: 65, id: 2, img: "./img/MousepadSteelseries.webp"},
    {nombre: "Mousepad ZOWIE G-SR-SE", precio: 65, id: 3, img: "./img/MousepadZowieGSRSE.webp"},
    {nombre: "Mousepad Razer Gigantus V2", precio: 65, id: 4, img: "./img/MousepadRazerGigantusV2.webp"},
    {nombre: "Mousepad ZOWIE G-SR", precio: 65, id: 5, img: "./img/MousepadZowieGSR.webp"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos)
        }, 2000)
    })
}