// include dependencies
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// proxy middleware options
const options = {
    target: 'https://www.famousfootwear.com', // target host
    changeOrigin: true, // needed for virtual hosted sites
    logLevel: 'info'
};

const options2 = {
    target: 'http://localhost:5000', // target host
    changeOrigin: true, // needed for virtual hosted sites
    logLevel: 'info'
};

// create the proxy (without context)
const exampleProxy = createProxyMiddleware(options);
const exampleProxy2 = createProxyMiddleware(options2);
 
// mount `exampleProxy` in web server
const app = express();
app.use('/-/media/themes/tenant/famous-footwear/famous-footwear-common-styles/styles', exampleProxy2);
app.use('/-/media/themes/tenant/famous-footwear/famous-footwear-product-styles/styles', exampleProxy2);
app.use('/-/media/base-themes/caleres-commerce-product-components/scripts/', exampleProxy2);
app.use('*', exampleProxy);

app.listen(3000);

