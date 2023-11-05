const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

app.use(cors());


app.use(createProxyMiddleware('/', {
  target: 'https://www.openalgebra.com',
  changeOrigin: true,
  secure: false, // Bypass SSL/TLS verification
}));

const port = 80;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
