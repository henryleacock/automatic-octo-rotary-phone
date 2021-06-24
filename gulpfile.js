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

exports.commonStyles = commonStyles;
exports.productStyles = productStyles;
exports.productScripts = productScripts;
exports.optimizeAll = series(commonStyles, productStyles, productScripts);
