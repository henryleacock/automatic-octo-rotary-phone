const { series, src, dest } = require('gulp');
const concat = require('gulp-concat');


function commonStyles() {
    return src('../Sitecore_Commerce/Storefront/src/creative-exchange/-/media/Themes/Tenant/Famous Footwear/Famous Footwear Common Styles/styles/common.css')
        .pipe(concat('optimized-min.css'))
        .pipe(dest('./-/media/themes/tenant/famous-footwear/famous-footwear-common-styles/styles/'));
}

function productStyles() {
    return src('../Sitecore_Commerce/Storefront/src/creative-exchange/-/media/Themes/Tenant/Famous Footwear/Famous Footwear Product Styles/styles/plp-pdp.css')
        .pipe(concat('optimized-min.css'))
        .pipe(dest('./-/media/themes/tenant/famous-footwear/famous-footwear-product-styles/styles/'));
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
exports.optimizeAll = series(commonStyles, productStyles, productScripts, caleresCommonScripts);
