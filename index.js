// include dependencies
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const onProxyReq = function (proxyReq, req, res) {
    // add new header to request
    proxyReq.setHeader('x-added', 'foobar');
};

const onProxyRes = function (proxyRes, req, res) {
    // add new header to response
    proxyRes.headers['x-added'] = 'foobar';

    // remove header from response
    // delete proxyRes.headers['x-removed'];
};

// proxy middleware options
const options = {
    target: 'https://www.famousfootwear.com', // target host
    changeOrigin: true, // needed for virtual hosted sites
    logLevel: 'debug',
    headers: {
        'X-Custom-Header': 'foobar'
    },
    onProxyReq: onProxyReq,
    onProxyRes: onProxyRes
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
app.use('/-/media/base-themes/caleres-common/scripts/', exampleProxy2);
app.use('*', exampleProxy);

app.listen(3000);

