const { series, src, dest } = require('gulp');
const concat = require('gulp-concat');
const argv = require('yargs').argv;

function config(arguments) {
    // console.log(arguments);
    var siteConfig = {};
    switch (true) {
        case arguments.famous:
            siteConfig.path = 'famous-footwear';
            siteConfig.name = 'Famous Footwear';
            break;

        case arguments.bzees:
            siteConfig.path = 'bzees';
            siteConfig.name = 'Bzees';
            break;
    
        case arguments.drs:
            siteConfig.path = 'dr-scholls-shoes';
            siteConfig.name = 'Dr Scholls Shoes';
            break;

        case arguments.franco:
            siteConfig.path = 'franco-sarto';
            siteConfig.name = 'Franco Sarto';
            break;
    
        default:
            siteConfig.path = 'famous-footwear';
            siteConfig.name = 'Famous Footwear';
            break;
    }
    return siteConfig;
}

function commonStyles() {
    var siteName = config(argv).name;
    var sitePath = config(argv).path;
    return src('../Sitecore_Commerce/Storefront/src/creative-exchange/-/media/Themes/Tenant/'+siteName+'/'+siteName+' Common Styles/styles/common.css')
        .pipe(concat('optimized-min.css'))
        .pipe(dest('./-/media/themes/tenant/'+sitePath+'/'+sitePath+'-common-styles/styles/'));
}

function productStyles() {
    var siteName = config(argv).name;
    var sitePath = config(argv).path;
    return src('../Sitecore_Commerce/Storefront/src/creative-exchange/-/media/Themes/Tenant/'+siteName+'/'+siteName+' Product Styles/styles/plp-pdp.css')
        .pipe(concat('optimized-min.css'))
        .pipe(dest('./-/media/themes/tenant/'+sitePath+'/'+sitePath+'-product-styles/styles/'));
}

function productScripts() {
    return src('../Sitecore_Commerce/Storefront/src/creative-exchange/-/media/Base Themes/Caleres Commerce Product Components/scripts/*.js')
        .pipe(concat('optimized-min.js'))
        .pipe(dest('./-/media/base-themes/caleres-commerce-product-components/scripts/'));
}

function caleresCommonScripts() {
    return src(['../Sitecore_Commerce/Storefront/src/creative-exchange/-/media/Base Themes/Caleres Common/scripts/0-libraries/*.js',
                '../Sitecore_Commerce/Storefront/src/creative-exchange/-/media/Base Themes/Caleres Common/scripts/1-core/*.js',
                '../Sitecore_Commerce/Storefront/src/creative-exchange/-/media/Base Themes/Caleres Common/scripts/2-services/*.js',
                '../Sitecore_Commerce/Storefront/src/creative-exchange/-/media/Base Themes/Caleres Common/scripts/3-components/*.js',
                '../Sitecore_Commerce/Storefront/src/creative-exchange/-/media/Base Themes/Caleres Common/scripts/4-common-commerce/*.js',
                '../Sitecore_Commerce/Storefront/src/creative-exchange/-/media/Base Themes/Caleres Common/scripts/5-ootb-common-components/*.js',
                '../Sitecore_Commerce/Storefront/src/creative-exchange/-/media/Base Themes/Caleres Common/scripts/6-analytics/*.js',
                '../Sitecore_Commerce/Storefront/src/creative-exchange/-/media/Base Themes/Caleres Common/scripts/core.js'])
        .pipe(concat('optimized-min.js'))
        .pipe(dest('./-/media/base-themes/caleres-common/scripts/'));
}

exports.commonStyles = commonStyles;
exports.productStyles = productStyles;
exports.productScripts = productScripts;
exports.caleresCommonScripts = caleresCommonScripts;
exports.styles = series(commonStyles, productStyles);
exports.scripts = series(productScripts, caleresCommonScripts);
exports.optimizeAll = series(commonStyles, productStyles, productScripts, caleresCommonScripts);
