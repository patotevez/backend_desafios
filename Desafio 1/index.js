class Contenedor {
    productos = []

    constructor(productos) {
        this.productos.push(productos)
    }

    save(productos){
        this.productos.push(productos)
        return 'Agregaste un producto'
    }

    getById(id){
        let a = this.productos.find(el => el.id === id)
        if(a){
            return 'El producto ' + a.id + ' es ' + a.title
        }else{
            return 'Producto no encontrado'
        }
    }

    getAll(){
        return this.productos
    }

    deleteById(id){
        let a = this.productos.find(el => el.id === id)
        if(a){
            const filterProductos = this.productos.filter((el)=> el.id !==id)
            this.productos = filterProductos
            return 'Producto' + a.id + '('+a.title+') eliminado'
        }else{
            return 'Producto no encontrado'
        }
        }
        
    deleteAll(){
        this.productos = []
        return 'Productos eliminados'
    }
}

const cont1 =new Contenedor({
        id: 1,
        title: "Golf R32",
        price: 32000,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_662874-MLA44955086008_022021-F.webp",
})

console.log(cont1.save({
        id: 2,
        title: "Fiat 500 Abarth",
        price: 25900,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_709261-MLA50790222699_072022-F.webp",
}));

console.log(cont1.getAll());

console.log(cont1.getById(2));

console.log(cont1.deleteAll());

console.log(cont1.deleteById(1));

