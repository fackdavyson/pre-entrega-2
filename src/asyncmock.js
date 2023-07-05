const misProductos = [
    { id: "1", nombre: "PC Armada Basica", precio: 100000, img: "../img/pc-armada-basica.jpg", idCat: "2" },
    { id: "2", nombre: "PC Armada Media", precio: 200000, img: "../img/pc-armada-media.jpg", idCat: "2" },
    { id: "3", nombre: "Intel Core I5", precio: 70000, img: "../img/procesador-intel.jpg", idCat: "3" },
    { id: "4", nombre: "AMD Ryzen 5", precio: 60000, img: "../img/procesador-ryzen.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 200)
    })
}


//Creamos una nueva función similar a la anterior pero qu enos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}


//Creamos una función que retora un array de una determinada categoría de producto: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}