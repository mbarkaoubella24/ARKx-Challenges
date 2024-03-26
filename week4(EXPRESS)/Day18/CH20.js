const express = require('express');
const app = express();
const port = 3000;

const loggingMiddleware = (req, res, next) => {
  const dateTime = new Date().toISOString();
  const method = req.method;
  const url = req.url;

  console.log(`[${dateTime}] ${method} ${url}`);
  next(); 
};

const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};

app.use(express.json());

app.use(loggingMiddleware);

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    throw new Error('Product not found');
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
  res.status(201).json(newProduct);
});

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
