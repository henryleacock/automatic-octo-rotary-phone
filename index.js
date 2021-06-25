// include dependencies
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const argv = require('yargs').argv;

function config(arguments) {
    // console.log(arguments);
    var siteConfig = {};
    switch (true) {
        case arguments.famous:
            siteConfig.name = 'famousfootwear';
            siteConfig.path = 'famous-footwear';
            break;

        case arguments.bzees:
            siteConfig.name = 'bzees';
            siteConfig.path = 'bzees';
            break;
    
        case arguments.drs:
            siteConfig.name = 'drschollsshoes';
            siteConfig.path = 'dr-scholls-shoes';
            break;

        case arguments.franco:
            siteConfig.name = 'francosarto';
            siteConfig.path = 'franco-sarto';
            break;
    
        default:
            siteConfig.name = 'famousfootwear';
            siteConfig.path = 'famous-footwear';
            break;
    }
    return siteConfig;
}

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
    target: 'https://www.'+config(argv).name+'.com', // target host
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
app.use('/-/media/themes/tenant/'+config(argv).path+'/'+config(argv).path+'-common-styles/styles', exampleProxy2);
app.use('/-/media/themes/tenant/'+config(argv).path+'/'+config(argv).path+'-product-styles/styles', exampleProxy2);
app.use('/-/media/base-themes/caleres-commerce-product-components/scripts/', exampleProxy2);
app.use('/-/media/base-themes/caleres-common/scripts/', exampleProxy2);
app.use('*', exampleProxy);

app.listen(3000);

