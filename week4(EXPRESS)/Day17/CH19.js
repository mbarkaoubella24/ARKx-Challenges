const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
  ];

  
  app.get('/products', (req, res) => {
    res.json(products);
});


app.get('/products/search', (req,res)=>{
    const Name = req.query.name.toLowerCase()
    const min = req.query.pricemin
    const max = req.query.pricemax
    let filteredProducts = products;
    if(Name){
        filteredProducts = filteredProducts.filter(p => {
            let nom = p.name.toLowerCase()
            return nom.includes(Name)
        })
    }
    if(min){
        filteredProducts = filteredProducts.filter(p => p.price >= min )
    }
    if(max){
        filteredProducts = filteredProducts.filter(p => p.price <= max)
    }
    res.send(filteredProducts)
})


app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (product) {
        res.send(product);
    } else {
        res.send('Product not found');
    }
});


app.post('/products', (req, res) => {
    const { name, price } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);

    res.send(newProduct);
});


app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, price } = req.body;

    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex !== -1) {

        products[productIndex].name = name;
        products[productIndex].price = price;

        res.send(products[productIndex]);
    } else {
        res.send('Product not found');
    }
});


app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex !== -1) {
        const deletedProduct = products.splice(productIndex, 1)[0];
        res.send(deletedProduct);
    } else {
        res.send('Product not found');
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
