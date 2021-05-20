// include dependencies
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
 
const filter = function (pathname, req) {
    return pathname.match('*') && req.method === 'GET';
};

// proxy middleware options
const options = {
    target: 'https://www.famousfootwear.com', // target host
    changeOrigin: true, // needed for virtual hosted sites
    logLevel: 'info',
    pathRewrite: async function (path, req) {
        // if (path.includes('/-/media/themes/tenant/famous-footwear/famous-footwear-common-styles/styles/optimized-min.css')) {
        if (path.includes('/search')) {
            console.log('we are here:', path);
            path = '/this-is-a-test' + path;
            console.log('after transform:', path);
        }
        
        // const should_add_something = await httpRequestToDecideSomething(path);
        // if (should_add_something) path += "something";
        return path;
      }
};

// pathRewrite: {'^/-/media/themes/tenant/famous-footwear/famous-footwear-common-styles/styles/optimized-min.css' : 'http://localhost:8000/-/media/themes/tenant/famous-footwear/famous-footwear-common-styles/styles/optimized-min.css'}
// pathRewrite: {'^/-/media/themes/tenant/famous-footwear/famous-footwear-common-styles/styles/optimized-min.css' : 'http://localhost:8000/optimized-min.css'}
// http://localhost:3000/http://localhost:8000/optimized-min.css
// http://localhost:8000

// pathRewrite: {'^/-/media/themes/tenant/famous-footwear/famous-footwear-common-styles/styles/' : '/'}
// router: {
//     '^/-/media/themes/tenant/famous-footwear/famous-footwear-common-styles/styles/': 'http://localhost:8000/optimized-min.css'
// }
 
// create the proxy (without context)
const exampleProxy = createProxyMiddleware(options);
 
// mount `exampleProxy` in web server
const app = express();
app.use('*', exampleProxy);
// app.use(express.static('public'));
app.listen(3000);



// autoRewrite: true,
// ws: true, // proxy websockets
//     router: {
//         // when request.headers.host == 'dev.localhost:3000',
//         // override target 'http://www.example.org' to 'http://localhost:8000'
//         'dev.localhost:3000': 'http://localhost:8000',
//     },
