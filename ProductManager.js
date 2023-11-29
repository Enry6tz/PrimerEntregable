class Product{    
    constructor(title,description, price, thumbnail,code,stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}
class ProductManager{
    constructor(){
        this.listProducts = [];
        this.id=1;
    }
    addProduct(title, description, price, thumbnail, code,stock){
        //chequeo de campos obligatorios
        if(title && description && price && thumbnail && code && stock ){
            // Validar que no se repita el campo "code"
            if (!this.listProducts.some(product => product.code === code)) {
                
                //creacion de la nueva instancia y agrega al arreglo de productos
                const newProduct = new Product(title, description, price, thumbnail, code,stock);
                newProduct.id = this.id; // Agregar el ID autoincrementable
                this.listProducts.push(newProduct);
                console.log("Producto agregado:", newProduct);
                this.id++;
            }else{
                console.log("Ya existe un producto con ese código.");
            }
        }else{
            console.log("no se puede agregar producto. campos invalidos")
        }
    }
    getProductById(id) {
        const product = this.listProducts.find(product => product.id === id);
    
        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado (Not found).");
            return null;
        }
    }
    getProducts(){
        return this.listProducts;
    }

}



// --> testing

// Pruebas
const productManager = new ProductManager();

// Se llama a getProducts, debe devolver un arreglo vacío
console.log("Productos al inicio:", productManager.getProducts());

// Se llama a addProduct con nuevos campos
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

// Se llama a getProducts nuevamente, debe aparecer el producto recién agregado
console.log("Productos después de agregar uno:", productManager.getProducts());

// Se intenta agregar un producto con el mismo código, debe arrojar un error
productManager.addProduct("producto repetido", "Este es un producto repetido", 150, "Imagen repetida", "abc123", 10);

// Se evalúa que getProductById devuelva el producto o un error si no se encuentra

//deberia devolver null
const foundProductFalse = productManager.getProductById(10); 
console.log(foundProductFalse);

//deberia devolver el primer producto agregado
const foundProductTrue = productManager.getProductById(1); 
console.log(foundProductTrue);
