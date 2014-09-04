'use strict';

angular.module('CouchCommerceApp')
.factory('productService', function ($filter) {

    var self = {};

    self.getBasePriceInfo = function (product, selectedVariant) {
        if (!product.hasBasePrice()) {
            return '';
        }

        var price = $filter('currency')(product.getBasePriceStr(selectedVariant));

        if (product.getUnit() === 'kg') {
            return  price + ' za 1 Kilogram (kg)';
        }
        else if (product.getUnit() === 'St') {
            return  price + ' za 1 Sztukę (Szt)';
        }
        else if (product.getUnit() === 'L') {
            return  price + ' za 1 Litr (l)';
        }
        else if (product.hasUnit()) {
            return price + ' za ' + product.getUnit();
        }

        return '';
    };
    return self;
});
