//Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
export const getAllOrnamentalesPlus100 = async() =>{
    let res = await fetch("http://172.16.101.146:5506/products?gama=Ornamentales")
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val => {
        if(val.stock >= 100){
            dataUpdate.push(val)
        }
    })
    return dataUpdate
}

export const getProductsNeverOrdered = async() =>{
    let productsRes = await fetch(`http://172.16.101.146:5506/products`);
    let products = await productsRes.json();

    let ordersRes = await fetch(`http://172.16.101.146:5507/requests`);
    let orders = await ordersRes.json();

    let productsInOrders = new Set();
        orders.forEach(order => {
            if (order.products) {
                order.products.forEach(product => {
                    productsInOrders.add(product.code_product);
                });
            }
        });

    let productsNeverOrdered = products.filter(product => !productsInOrders.has(product.code_product));

    return productsNeverOrdered;
}

export const getProductsNotOrdered = async() =>{
    let productsRes = await fetch(`http://172.16.101.146:5506/products`);
    let products = await productsRes.json();

    let ordersRes = await fetch(`http://172.16.101.146:5507/requests`);
    let orders = await ordersRes.json();

    let productsInOrders = new Set();
        orders.forEach(order => {
            if (order.products) {
                order.products.forEach(product => {
                    productsInOrders.add(product.code_product);
                });
            }
        });

        let productsNotOrdered = products.filter(product => !productsInOrders.has(product.code_product));

        let formattedProducts = productsNotOrdered.map(product => ({
            name: product.name,
            description: product.description,
            image: product.image
        }));

        return formattedProducts;
}