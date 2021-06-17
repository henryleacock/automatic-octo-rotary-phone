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
    target: 'https://dev.famousfootwear.com', // target host
    changeOrigin: true, // needed for virtual hosted sites
    logLevel: 'debug',
    headers: {
        'X-Custom-Header': 'foobar'
    },
    onProxyReq: onProxyReq,
    onProxyRes: onProxyRes
};

const options2 = {
    target: 'http://localhost:9000', // target host
    changeOrigin: true, // needed for virtual hosted sites
    logLevel: 'info'
};

// create the proxy (without context)
const exampleProxy = createProxyMiddleware(options);
const exampleProxy2 = createProxyMiddleware(options2);

 
// mount `exampleProxy` in web server
const app = express();
app.use('/-/media/themes/tenant/famous%20footwear/famous%20footwear%20common%20styles/styles', exampleProxy2);
app.use('/-/media/themes/tenant/famous%20footwear/famous%20footwear%20product%20styles/styles', exampleProxy2);
app.use('/-/media/base%20themes/caleres%20commerce%20product%20components/scripts/', exampleProxy2);
app.use('*', exampleProxy);

app.listen(3000);

