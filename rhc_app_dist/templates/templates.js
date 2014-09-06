angular.module('templates', ['cart/cc-cart.tpl.html', 'cart/cc-paypal-overlay.tpl.html', 'categories/cc-category-grid.tpl.html', 'categories/cc-category-list.tpl.html', 'checkout/cc-checkout.tpl.html', 'common/404/cc-404-products.tpl.html', 'common/404/cc-404.tpl.html', 'common/contextviews/cc-context-view.tpl.html', 'common/dialog/cc-dialog.tpl.html', 'common/dialog/cc-loading-dialog.tpl.html', 'common/footer/cc-footer.tpl.html', 'common/header/cc-header.tpl.html', 'common/shell/shell.tpl.html', 'common/sidemenu/cc-side-menu.tpl.html', 'common/totalbox/cc-cart-total-panel.tpl.html', 'pages/cc-context-pages.tpl.html', 'pages/cc-pages.tpl.html', 'product/cc-product-buy-box.tpl.html', 'product/cc-product-wide.tpl.html', 'product/cc-product.tpl.html', 'products/cc-product-grid.tpl.html', 'search/cc-search-box.tpl.html', 'search/cc-search-result.tpl.html', 'summary/cc-summary.tpl.html', 'thankyou/cc-thankyou.tpl.html', 'trustedshops/cc-trusted-shops.tpl.html', 'wishlist/cc-wishlist-button.tpl.html', 'wishlist/cc-wishlist.tpl.html']);

angular.module("cart/cc-cart.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cart/cc-cart.tpl.html",
    "<div class=\"cc-side-menu cc-side-menu--cart\" bindonce=\"ln\">\n" +
    "\n" +
    "    <div class=\"cc-side-menu__header\">\n" +
    "        <span bo-text=\"ln.shoppingCart\"></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"cc-side-menu__content\">\n" +
    "\n" +
    "        <div class=\"cc-side-menu__scroll-container\">\n" +
    "\n" +
    "            <div class=\"cc-sticky-view-wrapper\">\n" +
    "                <div class=\"cc-sticky-view-wrapper__content\">\n" +
    "                    <div class=\"cc-cart__content-box\">\n" +
    "\n" +
    "                        <div class=\"cc-cart-empty-hint\" ng-show=\"isEmpty\">\n" +
    "                            <div class=\"cc-cart-empty-hint-content\">\n" +
    "                                <div class=\"fa-4x fa fa-shopping-cart\"></div>\n" +
    "                                <div bo-text=\"ln.cartIsEmpty\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <ul class=\"cc-cart-list\" ng-show=\"!isEmpty\">\n" +
    "                            <li ng-repeat=\"item in items\" class=\"cc-cart-list__item cc-animate\">\n" +
    "                                <img class=\"cc-cart-list__item-image\"\n" +
    "                                     cc-src=\"item.product.getImage('large')\" cc-src-config=\"{maxwidth: 50, maxheight: 50}\"\n" +
    "                                     ng-click=\"navigationService.navigateToUrl(item.product.getOriginFullUrl())\" alt=\"\" />\n" +
    "                                <div class=\"cc-cart-list__item-content\">\n" +
    "                                    <strong class=\"cc-cart-list__item-title\">\n" +
    "                                        {{item.product.name}}\n" +
    "                                    </strong>\n" +
    "\n" +
    "\n" +
    "                                    <ul class=\"cc-cart-list__item-variants\">\n" +
    "                                        <li ng-repeat=\"(variantProperty, variantPropertyValue) in item.variant.properties\">\n" +
    "                                            <span class=\"cc-properties__key\">{{variantProperty}}:</span>\n" +
    "                                            <span class=\"cc-properties__value\">{{variantPropertyValue}}</span>\n" +
    "                                        </li>\n" +
    "                                    </ul>\n" +
    "\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"cc-cart-list__item-footer\">\n" +
    "\n" +
    "                                    <span class=\"cc-cart__item-price\">\n" +
    "                                        {{item.quantity}} &times;\n" +
    "                                        <cc-price product=\"item.product\" selected-variant=\"item.variant\">\n" +
    "\n" +
    "                                        </cc-price>\n" +
    "                                    </span>\n" +
    "\n" +
    "                                    <span class=\"cc-cart__item-price--total\">\n" +
    "                                        {{item.getTotal() | currency: '€'}}\n" +
    "                                    </span>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"cc-cart-quantity-selector\">\n" +
    "                                    <span ng-click=\"decreaseItem(item)\" class=\"cc-cart-button--decrease\"></span>\n" +
    "                                    <span ng-show=\"basketService.canBeIncreasedBy(item, 1)\" ng-click=\"basketService.increaseOne(item)\" class=\"cc-cart-button--increase\"></span>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                            <li ng-repeat=\"coupon in coupons\" class=\"cc-cart-list__item cc-cart-list__item--coupon\">\n" +
    "                                <div class=\"cc-cart-list__item-content\">\n" +
    "                                    <strong class=\"cc-cart-list__item-title\">\n" +
    "                                        <span ng-bind=\"ln.promotionCode\"></span><br>\n" +
    "                                        {{coupon.name}}\n" +
    "                                    </strong>\n" +
    "                                </div>\n" +
    "                                <div class=\"cc-cart-list__item-footer\">\n" +
    "                                    <span class=\"cc-cart__item-price--total\">\n" +
    "                                        {{-coupon.amount | currency: '€'}}\n" +
    "                                    </span>\n" +
    "                                </div>\n" +
    "                                <div class=\"cc-cart-quantity-selector\">\n" +
    "                                    <span ng-click=\"basketService.removeCoupon(coupon.code)\" class=\"cc-cart-button--decrease\"></span>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"cc-cart-promotioncode-box\" ng-show=\"!isEmpty && enablePromotionCodes\">\n" +
    "                        <a class=\"cc-cart-coupon-button\" ng-hide=\"promotionCodeModel.showForm\" ng-click=\"promotionCodeModel.showForm=!promotionCodeModel.showForm\">{{ln.promotionCodeHint}}</a>\n" +
    "                        <form name=\"billingAddressForm\" novalidate class=\"cc-text-box-on-background\" ng-show=\"promotionCodeModel.showForm\">\n" +
    "                            <p class=\"cc-form-label\">{{ln.promotionCode}}</p>\n" +
    "                            <input ng-model=\"promotionCodeModel.code\" class=\"cc-text-box\" type=\"text\"/>\n" +
    "                            <a ng-click=\"canRedeemCode() && redeemCode()\" ng-class=\"canRedeemCode() ? 'cc-promotion-code-button' : 'cc-promotion-code-button--disabled'\">{{ln.promotionCodeButton}}</a>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"cc-sticky-view-wrapper__footer\">\n" +
    "                    <div class=\"cc-cart__total-box-wrapper\" ng-show=\"!isEmpty\">\n" +
    "                        <!-- is that a candidate for a cc-total-box directive? -->\n" +
    "                        <div cc-include=\"tpl.TOTALBOX\"></div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"cc-cart-actions\" ng-show=\"!isEmpty\">\n" +
    "\n" +
    "                        <a ng-if=\"cfg.showCheckoutButton\"\n" +
    "                           ng-click=\"navigationService.navigateToCheckout()\"\n" +
    "                           class=\"cc-cart-checkout-button\"\n" +
    "                           bo-text=\"ln.checkout\"></a>\n" +
    "\n" +
    "                        <a ng-if=\"cfg.showPayPalButton\"\n" +
    "                           ng-click=\"checkoutWithPayPal()\"\n" +
    "                           bo-class=\"configService.getLocalizedPayPalButtonClass()\"></a>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <!--<div class=\"cc-side-menu__footer\">-->\n" +
    "                    <!---->\n" +
    "                    <!--</div>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("cart/cc-paypal-overlay.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cart/cc-paypal-overlay.tpl.html",
    "<div class=\"modal-body cc-paypal-overlay\" bindonce=\"ln\">\n" +
    "    <i class=\"cc-paypal-overlay__close-icon\" ng-click=\"close()\"></i>\n" +
    "    <div class=\"cc-form__item\">\n" +
    "        <label class=\"cc-form__label\" bo-text=\"ln.formCountry\"></label>\n" +
    "        <cc-select-box\n" +
    "            model=\"vm.selectedCountry\"\n" +
    "            data=\"vm.countries\"\n" +
    "            property-name=\"{{ln.paymentMethod}}\"\n" +
    "            display-value-exp=\"'label'\">\n" +
    "        </cc-select-box>\n" +
    "    </div>\n" +
    "    <div class=\"cc-form__item\">\n" +
    "        <label class=\"cc-form__label\" bo-text=\"ln.shippingMethod\"></label>\n" +
    "        <cc-select-box\n" +
    "            model=\"vm.selectedShippingMethod\"\n" +
    "            data=\"vm.supportedShippingMethods\"\n" +
    "            property-name=\"{{ln.shippingMethod}}\"\n" +
    "            display-value-exp=\"shippingMethodFormatter\">\n" +
    "        </cc-select-box>\n" +
    "    </div>\n" +
    "    <div class=\"cc-message-box--error\" ng-show=\"!vm.supportedShippingMethods.length\" bo-text=\"ln.noPayPalShippingMethod\"></div>\n" +
    "    <a ng-click=\"vm.canProceed && proceed()\" ng-class=\"configService.getLocalizedPayPalButtonClass(!vm.canProceed)\"></a>\n" +
    "    <cc-loading-spinner ng-show=\"processing\"></cc-loading-spinner>\n" +
    "</div>\n" +
    "");
}]);

angular.module("categories/cc-category-grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("categories/cc-category-grid.tpl.html",
    "<div cc-scroller-announcer class=\"cc-scroller--if-fixed cc-view-wrapper\">\n" +
    "\n" +
    "    <div class=\"cc-sticky-view-wrapper\">\n" +
    "\n" +
    "        <div class=\"cc-sticky-view-wrapper__content\">\n" +
    "            <cc-inject target=\"aboveContent\"></cc-inject>\n" +
    "\n" +
    "            <div bindonce=\"category\" ng-if=\"category\">\n" +
    "\n" +
    "                <div class=\"cc-category__header-block\">\n" +
    "                    <div class=\"cc-category__up-nav\" ng-show=\"category.parent\">\n" +
    "                        <cc-go-up-control home-text=\"{{ ln.home }}\" category=\"category\"></cc-go-up-control>\n" +
    "                    </div>\n" +
    "                    <div class=\"cc-category__header\">\n" +
    "                        <h1 class=\"cc-title--huge\" bo-text=\"headline\"></h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <ul class=\"cc-category-grid\">\n" +
    "                    <li ng-repeat=\"category in category.children\" class=\"cc-list__item\">\n" +
    "\n" +
    "                        <a\n" +
    "                            ng-href=\"{{category.getOriginFullUrl()}}\"\n" +
    "                            ng-click=\"goToCategory(category, $event)\"\n" +
    "                            ng-class=\"{ 'cc-highlight--out': backStepHighlightService.isHighlighted(category) }\"\n" +
    "                            class=\"cc-category-item\">\n" +
    "\n" +
    "                            <div class=\"cc-category-item__media-wrapper\">\n" +
    "                                <div class=\"cc-category-item__media\">\n" +
    "                                    <img class=\"cc-category-item__image\" cc-src=\"category.image\" cc-src-config=\"{maxwidth: 300, maxheight: 200}\" cc-src-spinner=\"true\" alt=\"\"/>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"cc-category-item__info-wrapper\">\n" +
    "                                <strong class=\"cc-category-item__title\" bo-text=\"category.label\"></strong>\n" +
    "                            </div>\n" +
    "\n" +
    "                        </a>\n" +
    "\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"!category\" ng-include=\"tpl.404\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"cc-sticky-view-wrapper__footer\">\n" +
    "            <cc-inject target=\"aboveFooter\"></cc-inject>\n" +
    "            <cc-footer></cc-footer>\n" +
    "            <cc-inject target=\"beneathFooter\"></cc-inject>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("categories/cc-category-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("categories/cc-category-list.tpl.html",
    "<div cc-scroller-announcer class=\"cc-view-wrapper\">\n" +
    "\n" +
    "    <div class=\"cc-sticky-view-wrapper\">\n" +
    "\n" +
    "        <div class=\"cc-sticky-view-wrapper__content\">\n" +
    "            <cc-inject target=\"aboveContent\"></cc-inject>\n" +
    "\n" +
    "            <div bindonce=\"category\" ng-if=\"category\">\n" +
    "\n" +
    "                <div class=\"cc-category__header-block\">\n" +
    "                    <div class=\"cc-category__up-nav\" ng-show=\"category.parent\">\n" +
    "                        <cc-go-up-control home-text=\"{{ ln.home }}\" category=\"category\"></cc-go-up-control>\n" +
    "                    </div>\n" +
    "                    <div class=\"cc-category__header\">\n" +
    "                        <h1 class=\"cc-title--huge\" bo-text=\"headline\"></h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <ul class=\"cc-category-list\">\n" +
    "                    <li ng-repeat=\"category in category.children\">\n" +
    "                        <a\n" +
    "                            class=\"cc-category-list__item\"\n" +
    "                            ng-class=\"{ 'cc-highlight--out': backStepHighlightService.isHighlighted(category) }\"\n" +
    "                            ng-click=\"goToCategory(category, $event)\"\n" +
    "                            ng-href=\"{{category.getOriginFullUrl()}}\"\n" +
    "                            bo-text=\"category.label\"></a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div ng-if=\"!category\" ng-include=\"tpl.404\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"cc-sticky-view-wrapper__footer\">\n" +
    "            <cc-inject target=\"aboveFooter\"></cc-inject>\n" +
    "            <cc-footer></cc-footer>\n" +
    "            <cc-inject target=\"beneathFooter\"></cc-inject>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("checkout/cc-checkout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("checkout/cc-checkout.tpl.html",
    "<div cc-scroller-announcer class=\"cc-scroller--if-fixed cc-view-wrapper\" bindonce=\"ln\">\n" +
    "\n" +
    "    <div class=\"cc-checkout__header-block\">\n" +
    "\n" +
    "        <div class=\"cc-checkout__up-nav\">\n" +
    "            <cc-go-back-button>\n" +
    "                <i class=\"cc-go-back-button__icon\"></i>\n" +
    "                <span class=\"cc-go-back-button__text\" ng-bind=\"ln.back\"></span>\n" +
    "            </cc-go-back-button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"cc-checkout__header\">\n" +
    "            <h1 bo-text=\"ln.checkout\" class=\"cc-title--huge\"></h1>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"cc-checkout__wrapper\">\n" +
    "\n" +
    "        <section class=\"cc-checkout-section cc-checkout__options\">\n" +
    "\n" +
    "            <form name=\"paymentMethodForm\" novalidate>\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--1-1 cc-form-item\">\n" +
    "                        <span class=\"cc-form-label--required\" bo-text=\"ln.paymentMethod\"></span>\n" +
    "                        <cc-select-box\n" +
    "                                model=\"checkoutModel.selectedPaymentMethod\"\n" +
    "                                data=\"checkoutModel.supportedPaymentMethods\"\n" +
    "                                choose-text=\"ln.choose\"\n" +
    "                                required=\"true\"\n" +
    "                                property-name=\"{{ln.paymentMethod}}\"\n" +
    "                                display-value-exp=\"'title'\">\n" +
    "                        </cc-select-box>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <form name=\"shippingMethodForm\" novalidate ng-hide=\"displayEmptyShippingMethodsMessage\">\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--1-1 cc-form-item\">\n" +
    "                        <span class=\"cc-form-label--required\" bo-text=\"ln.shippingMethod\"></span>\n" +
    "                        <cc-select-box\n" +
    "                                   model=\"checkoutModel.selectedShippingMethod\"\n" +
    "                                   data=\"checkoutModel.supportedShippingMethods\"\n" +
    "                                   required=\"true\"\n" +
    "                                   property-name=\"{{ln.shippingMethod}}\"\n" +
    "                                   display-value-exp=\"shippingMethodFormatter\">\n" +
    "                        </cc-select-box>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "\n" +
    "            <div class=\"cc-message-box--error--iconic\" ng-show=\"displayEmptyShippingMethodsMessage\" ng-bind=\"ln.noShippingMethodsAvailable\"></div>\n" +
    "\n" +
    "        </section>\n" +
    "\n" +
    "        <section class=\"cc-checkout-section cc-checkout__address--billing\">\n" +
    "\n" +
    "            <div class=\"cc-message-box--info--iconic\" ng-show=\"checkoutModel.surchargeHint\" ng-bind=\"checkoutModel.surchargeHint\"></div>\n" +
    "\n" +
    "            <h3 bo-text=\"ln.billingAddress\"></h3>\n" +
    "\n" +
    "            <form name=\"billingAddressForm\" novalidate>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--1-1 cc-form-item\">\n" +
    "                        <label for=\"billing_company\" class=\"cc-form-label--optional\" bo-text=\"ln.formCompany\"></label>\n" +
    "                        <input type=\"text\" id=\"billing_company\" name=\"f_company\" class=\"cc-text-box\"\n" +
    "                               ng-model=\"checkoutModel.billingAddress.company\" />\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--1-1 cc-form-item\">\n" +
    "                        <span class=\"cc-form-label--required\" bo-text=\"ln.formSalutation\"></span>\n" +
    "                        <cc-select-box\n" +
    "                                model=\"checkoutModel.billingAddress.salutation\"\n" +
    "                                data=\"checkoutModel.salutations\"\n" +
    "                                required=\"true\"\n" +
    "                                choose-text=\"ln.choose\"\n" +
    "                                property-name=\"f_salutation\">\n" +
    "                        </cc-select-box>\n" +
    "                        <span ng-show=\"billingAddressForm.f_salutation.$dirty && billingAddressForm.f_salutation.$invalid\"\n" +
    "                              class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Salutation\">\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--1-2 cc-form-item\">\n" +
    "                        <label for=\"billing_given_name\" class=\"cc-form-label--required\" bo-text=\"ln.formGivenName\"></label>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <i ng-show=\"billingAddressForm.f_first_name.ccValid\" class=\"cc-validation__message--success\"></i>\n" +
    "                            <input type=\"text\" id=\"billing_given_name\" name=\"f_first_name\" class=\"cc-text-box\"\n" +
    "                                   ng-model=\"checkoutModel.billingAddress.name\" required cc-lazy-validation />\n" +
    "                            <span ng-show=\"billingAddressForm.f_first_name.$dirty && billingAddressForm.f_first_name.ccInvalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Firstname\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"cc-grid__cell--1-2 cc-form-item\">\n" +
    "                        <label for=\"billing_last_name\" class=\"cc-form-label--required\" bo-text=\"ln.formSurname\"></label>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <i ng-show=\"billingAddressForm.f_last_name.ccValid\" class=\"cc-validation__message--success\"></i>\n" +
    "                            <input type=\"text\" id=\"billing_last_name\" name=\"f_last_name\" class=\"cc-text-box\"\n" +
    "                                   ng-model=\"checkoutModel.billingAddress.surname\" required cc-lazy-validation />\n" +
    "                            <span ng-show=\"billingAddressForm.f_last_name.$dirty && billingAddressForm.f_last_name.ccInvalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Lastname\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--3-4 cc-form-item\">\n" +
    "                        <label for=\"billing_street\" class=\"cc-form-label--required\" bo-text=\"ln.formStreet\"></label>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <i ng-show=\"billingAddressForm.f_street.ccValid\" class=\"cc-validation__message--success\"></i>\n" +
    "                            <input type=\"text\" id=\"billing_street\" name=\"f_street\" class=\"cc-text-box\"\n" +
    "                                   ng-model=\"checkoutModel.billingAddress.street\" required cc-lazy-validation />\n" +
    "                            <span ng-show=\"billingAddressForm.f_street.$dirty && billingAddressForm.f_street.ccInvalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Street\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"cc-grid__cell--1-4 cc-form-item\">\n" +
    "                        <label for=\"billing_street_number\" class=\"cc-form-label--required\" bo-text=\"ln.formStreetNumber\"></label>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <i ng-show=\"billingAddressForm.f_street_number.ccValid\" class=\"cc-validation__message--success\"></i>\n" +
    "                            <input type=\"text\" id=\"billing_street_number\" name=\"f_street_number\" class=\"cc-text-box\"\n" +
    "                                   ng-model=\"checkoutModel.billingAddress.streetnumber\" required cc-lazy-validation />\n" +
    "                            <span ng-show=\"billingAddressForm.f_street_number.$dirty && billingAddressForm.f_street_number.ccInvalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_StreetNumber\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\" ng-if=\"requiredInputFields['streetextra']\">\n" +
    "                    <div class=\"cc-grid__cell--1-1 cc-form-item\">\n" +
    "                        <input ng-model=\"checkoutModel.billingAddress.streetextra\" name=\"streetextra\" class=\"cc-text-box\" type=\"text\" />\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--1-4 cc-form-item\">\n" +
    "                        <label for=\"billing_zip\" class=\"cc-form-label--required\" bo-text=\"ln.formZip\"></label>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <i ng-show=\"billingAddressForm.f_zip.ccValid\" class=\"cc-validation__message--success\"></i>\n" +
    "                            <input type=\"text\" id=\"billing_zip\" name=\"f_zip\" class=\"cc-text-box\"\n" +
    "                                   ng-model=\"checkoutModel.billingAddress.zip\" required cc-lazy-validation />\n" +
    "                            <span ng-show=\"billingAddressForm.f_zip.$dirty && billingAddressForm.f_zip.ccInvalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Zip\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"cc-grid__cell--3-4 cc-form-item\">\n" +
    "                        <label for=\"billing_city\" class=\"cc-form-label--required\" bo-text=\"ln.formCity\"></label>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <i ng-show=\"billingAddressForm.f_city.ccValid\" class=\"cc-validation__message--success\"></i>\n" +
    "                            <input type=\"text\" id=\"billing_city\" name=\"f_city\" class=\"cc-text-box\"\n" +
    "                                   ng-model=\"checkoutModel.billingAddress.city\" required cc-lazy-validation />\n" +
    "                            <span ng-show=\"billingAddressForm.f_city.$dirty && billingAddressForm.f_city.ccInvalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_City\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--1-1 cc-form-item\">\n" +
    "                        <span class=\"cc-form-label--required\" bo-text=\"ln.formCountry\"></span>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <cc-select-box\n" +
    "                                    model=\"checkoutModel.billingAddress.country\"\n" +
    "                                    data=\"configService.getSupportedCountries()\"\n" +
    "                                    choose-text=\"ln.choose\"\n" +
    "                                    required=\"true\"\n" +
    "                                    property-name=\"f_country\"\n" +
    "                                    display-value-exp=\"'label'\">\n" +
    "                            </cc-select-box>\n" +
    "                            <span ng-show=\"billingAddressForm.f_country.$dirty && billingAddressForm.f_country.$invalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Country\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--1-2 cc-form-item\">\n" +
    "                        <label for=\"billing_email\" class=\"cc-form-label--required\" bo-text=\"ln.formEmail\"></label>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <i ng-show=\"billingAddressForm.f_email.ccValid\" class=\"cc-validation__message--success\"></i>\n" +
    "                            <input type=\"email\" id=\"billing_email\" name=\"f_email\" class=\"cc-text-box\" placeholder=\"email@example.com\"\n" +
    "                                   ng-model=\"checkoutModel.billingAddress.email\" required cc-lazy-validation />\n" +
    "                            <span ng-show=\"billingAddressForm.f_email.$dirty && billingAddressForm.f_email.ccInvalid\">\n" +
    "                                <span ng-show=\"billingAddressForm.f_email.$error.required\"\n" +
    "                                      class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Email_required\"></span>\n" +
    "                                <span ng-show=\"billingAddressForm.f_email.$error.email\"\n" +
    "                                      class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Email_pattern\"></span>\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"cc-grid__cell--1-2 cc-form-item\">\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <label for=\"billing_phone\" ng-class=\"requiredInputFields['phone'] ? 'cc-form-label--required' : 'cc-form-label--optional'\" bo-text=\"ln.formTelephone\"></label>\n" +
    "                            <input type=\"tel\" id=\"billing_phone\" name=\"f_phone\" class=\"cc-text-box\"\n" +
    "                                   ng-model=\"checkoutModel.billingAddress.phone\" cc-lazy-validation ng-required=\"requiredInputFields['phone']\" />\n" +
    "                            <span ng-show=\"billingAddressForm.f_phone.$dirty && billingAddressForm.f_phone.ccInvalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Phone\"></span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-form-item\" ng-if=\"requiredInputFields['birthdate']\">\n" +
    "                    <span class=\"cc-form-label--required\" bo-text=\"ln.formBirthdate\"></span>\n" +
    "                    <div class=\"cc-validation__wrapper\">\n" +
    "                        <div class=\"cc-date__field--small\">\n" +
    "                            <label for=\"billing_birthday\" class=\"cc-hidden\" bo-text=\"ln.formDay\"></label>\n" +
    "                            <input ng-model=\"checkoutModel.billingAddress.birthday\" id=\"billing_birthday\"\n" +
    "                                   required cc-lazy-validation\n" +
    "                                   name=\"f_birthday\" class=\"cc-text-box\" ng-pattern=\"/[0-9]{2}/\"\n" +
    "                                   type=\"text\" placeholder=\"{{ln.formPlaceholderDay}}\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"cc-date__field--small\">\n" +
    "                            <label for=\"billing_birthmonth\" class=\"cc-hidden\" bo-text=\"ln.formMonth\"></label>\n" +
    "                            <input ng-model=\"checkoutModel.billingAddress[field.name + '_month']\" id=\"billing_birthmonth\"\n" +
    "                                   required cc-lazy-validation\n" +
    "                                   name=\"f_birthmonth\" class=\"cc-text-box\" ng-pattern=\"/[0-9]{2}/\"\n" +
    "                                   type=\"text\" placeholder=\"{{ln.formPlaceholderMonth}}\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"cc-date__field--large\">\n" +
    "                            <label for=\"billing_birthyear\" class=\"cc-hidden\" bo-text=\"ln.formYear\"></label>\n" +
    "                            <input ng-model=\"checkoutModel.billingAddress[field.name + '_year']\" id=\"billing_birthyear\"\n" +
    "                                   required cc-lazy-validation\n" +
    "                                   name=\"f_birthyear\" class=\"cc-text-box\" ng-pattern=\"/[0-9]{4}/\"\n" +
    "                                   type=\"text\" placeholder=\"{{ln.formPlaceholderYear}}\" />\n" +
    "                        </div>\n" +
    "                        <span ng-show=\"billingAddressForm.f_birthday.$dirty && billingAddressForm.f_birthday.ccInvalid\" class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Day\"></span>\n" +
    "                        <span ng-show=\"billingAddressForm.f_birthmonth.$dirty && billingAddressForm.f_birthmonth.ccInvalid\" class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Month\"></span>\n" +
    "                        <span ng-show=\"billingAddressForm.f_birthyear.$dirty && billingAddressForm.f_birthyear.ccInvalid\" class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Year\"></span>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\" ng-if=\"requiredInputFields['merchantnote']\">\n" +
    "                    <div class=\"cc-grid__cell--1-1 cc-form-item\">\n" +
    "                        <p class=\"cc-form-label--optional\">{{ln.formMerchantNote}}</p>\n" +
    "                        <input ng-model=\"checkoutModel.billingAddress.merchantnote\" name=\"merchantnote\" class=\"cc-text-box\" type=\"text\" />\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\" ng-if=\"requiredInputFields['pickuptimeatstore']\">\n" +
    "                    <div class=\"cc-grid__cell--1-1 cc-form-item\">\n" +
    "                        <p class=\"cc-form-label--optional\">{{ln.formPickupTimeAtShop}}</p>\n" +
    "                        <input ng-model=\"checkoutModel.billingAddress.pickuptimeatstore\" name=\"pickuptimeatstore\" class=\"cc-text-box\" type=\"text\" />\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </form>\n" +
    "\n" +
    "        </section>\n" +
    "\n" +
    "        <section class=\"cc-checkout-section cc-checkout__address--shipping\">\n" +
    "\n" +
    "            <h3 bo-text=\"ln.shippingAddress\"></h3>\n" +
    "\n" +
    "            <cc-check-box value=\"checkoutModel.addressEqual\" label=\"ln.sameAsBillingAddress\"></cc-check-box>\n" +
    "\n" +
    "            <form ng-hide=\"checkoutModel.addressEqual\" name=\"shippingAddressForm\">\n" +
    "\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--1-1 cc-form-item\">\n" +
    "                        <label for=\"shipping_company\" class=\"cc-form-label--optional\" bo-text=\"ln.formCompany\"></label>\n" +
    "                        <input type=\"text\" id=\"shipping_company\" name=\"f_company\" class=\"cc-text-box\"\n" +
    "                               ng-model=\"checkoutModel.shippingAddress.company\" />\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--1-1 cc-form-item\">\n" +
    "                        <span class=\"cc-form-label--required\" bo-text=\"ln.formSalutation\"></span>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <cc-select-box\n" +
    "                                    model=\"checkoutModel.shippingAddress.salutation\"\n" +
    "                                    data=\"checkoutModel.salutations\"\n" +
    "                                    required=\"true\"\n" +
    "                                    choose-text=\"ln.choose\"\n" +
    "                                    property-name=\"f_salutation\">\n" +
    "                            </cc-select-box>\n" +
    "                            <span ng-show=\"shippingAddressForm.f_salutation.$dirty && shippingAddressForm.f_salutation.$invalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Salutation\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--1-2 cc-form-item\">\n" +
    "                        <label for=\"shipping_given_name\" class=\"cc-form-label--required\" bo-text=\"ln.formGivenName\"></label>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <i ng-show=\"shippingAddressForm.f_first_name.ccValid\" class=\"cc-validation__message--success\"></i>\n" +
    "                            <input type=\"text\" id=\"shipping_given_name\" name=\"f_first_name\" class=\"cc-text-box\"\n" +
    "                                   ng-model=\"checkoutModel.shippingAddress.name\" required cc-lazy-validation />\n" +
    "                            <span ng-show=\"shippingAddressForm.f_first_name.$dirty && shippingAddressForm.f_first_name.ccInvalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Firstname\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"cc-grid__cell--1-2 cc-form-item\">\n" +
    "                        <label for=\"shipping_last_name\" class=\"cc-form-label--required\" bo-text=\"ln.formSurname\"></label>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <i ng-show=\"shippingAddressForm.f_last_name.ccValid\" class=\"cc-validation__message--success\"></i>\n" +
    "                            <input type=\"text\" id=\"shipping_last_name\" name=\"f_last_name\" class=\"cc-text-box\"\n" +
    "                                   ng-model=\"checkoutModel.shippingAddress.surname\" required cc-lazy-validation />\n" +
    "                            <span ng-show=\"shippingAddressForm.f_last_name.$dirty && shippingAddressForm.f_last_name.ccInvalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Lastname\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--3-4 cc-form-item\">\n" +
    "                        <label for=\"shipping_street\" class=\"cc-form-label--required\" bo-text=\"ln.formStreet\"></label>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <i ng-show=\"shippingAddressForm.f_street.ccValid\" class=\"cc-validation__message--success\"></i>\n" +
    "                            <input type=\"text\" id=\"shipping_street\" name=\"f_street\" class=\"cc-text-box\"\n" +
    "                                   ng-model=\"checkoutModel.shippingAddress.street\" required cc-lazy-validation />\n" +
    "                            <span ng-show=\"shippingAddressForm.f_street.$dirty && shippingAddressForm.f_street.ccInvalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Street\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"cc-grid__cell--1-4 cc-form-item\">\n" +
    "                        <label for=\"shipping_street_number\" class=\"cc-form-label--required\" bo-text=\"ln.formStreetNumber\"></label>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <i ng-show=\"shippingAddressForm.f_street_number.ccValid\" class=\"cc-validation__message--success\"></i>\n" +
    "                            <input type=\"text\" id=\"shipping_street_number\" name=\"f_street_number\" class=\"cc-text-box\"\n" +
    "                                   ng-model=\"checkoutModel.shippingAddress.streetnumber\" required cc-lazy-validation />\n" +
    "                            <span ng-show=\"shippingAddressForm.f_street_number.$dirty && shippingAddressForm.f_street_number.ccInvalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_StreetNumber\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\"  ng-if=\"requiredInputFields['streetextra']\">\n" +
    "                    <div class=\"cc-grid__cell--1-1 cc-form-item\">\n" +
    "                            <input ng-model=\"checkoutModel.shippingAddress.streetextra\" name=\"streetextra\" class=\"cc-text-box\" type=\"text\" />\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--1-4 cc-form-item\">\n" +
    "                        <label for=\"shipping_zip\" class=\"cc-form-label--required\" bo-text=\"ln.formZip\"></label>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <i ng-show=\"shippingAddressForm.f_zip.ccValid\" class=\"cc-validation__message--success\"></i>\n" +
    "                            <input type=\"text\" id=\"shipping_zip\" name=\"f_zip\" class=\"cc-text-box\"\n" +
    "                                   ng-model=\"checkoutModel.shippingAddress.zip\" required cc-lazy-validation />\n" +
    "                            <span ng-show=\"shippingAddressForm.f_zip.$dirty && shippingAddressForm.f_zip.ccInvalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Zip\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"cc-grid__cell--3-4 cc-form-item\">\n" +
    "                        <label for=\"shipping_city\" class=\"cc-form-label--required\" bo-text=\"ln.formCity\"></label>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <i ng-show=\"shippingAddressForm.f_city.ccValid\" class=\"cc-validation__message--success\"></i>\n" +
    "                            <input type=\"text\" id=\"shipping_city\" name=\"f_city\" class=\"cc-text-box\"\n" +
    "                                   ng-model=\"checkoutModel.shippingAddress.city\" required cc-lazy-validation />\n" +
    "                            <span ng-show=\"shippingAddressForm.f_city.$dirty && shippingAddressForm.f_city.ccInvalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_City\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--1-1 cc-form-item\">\n" +
    "                        <span class=\"cc-form-label--required\" bo-text=\"ln.formCountry\"></span>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <cc-select-box\n" +
    "                                    model=\"checkoutModel.shippingAddress.country\"\n" +
    "                                    data=\"configService.getSupportedCountries()\"\n" +
    "                                    choose-text=\"ln.choose\"\n" +
    "                                    required=\"true\"\n" +
    "                                    property-name=\"f_country\"\n" +
    "                                    display-value-exp=\"'label'\">\n" +
    "                            </cc-select-box>\n" +
    "                            <span ng-show=\"shippingAddressForm.f_country.$dirty && shippingAddressForm.f_country.$invalid\"\n" +
    "                                  class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Country\">\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-grid__row\">\n" +
    "                    <div class=\"cc-grid__cell--1-1 cc-form-item\">\n" +
    "                        <label for=\"shipping_email\" class=\"cc-form-label--required\" bo-text=\"ln.formEmail\"></label>\n" +
    "                        <div class=\"cc-validation__wrapper\">\n" +
    "                            <i ng-show=\"shippingAddressForm.f_email.ccValid\" class=\"cc-validation__message--success\"></i>\n" +
    "                            <input type=\"email\" id=\"shipping_email\" name=\"f_email\" class=\"cc-text-box\" placeholder=\"email@example.com\"\n" +
    "                                   ng-model=\"checkoutModel.shippingAddress.email\" required cc-lazy-validation />\n" +
    "                            <span ng-show=\"shippingAddressForm.f_email.$dirty && shippingAddressForm.f_email.ccInvalid\">\n" +
    "                                <span ng-show=\"shippingAddressForm.f_email.$error.required\"\n" +
    "                                      class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Email_required\"></span>\n" +
    "                                <span ng-show=\"shippingAddressForm.f_email.$error.email\"\n" +
    "                                      class=\"cc-validation__message--fail\" bo-text=\"ln.invalidInput_Email_pattern\"></span>\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </form>\n" +
    "        </section>\n" +
    "\n" +
    "        <section class=\"cc-checkout-section cc-checkout__navigation\">\n" +
    "            <div class=\"cc-message-box--warning\" ng-if=\"!canProceed()\" bo-text=\"ln.checkoutProceedInfo\"></div>\n" +
    "            <a ng-click=\"canProceed() && proceed()\" ng-class=\"canProceed() ? 'cc-checkout-button' : 'cc-checkout-button--disabled'\" bo-text=\"ln.nextStep\"></a>\n" +
    "        </section>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- WTF!? why can't we get that to work with ng-show? -->\n" +
    "    <cc-footer ng-if=\"!isEmpty\"></cc-footer>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/404/cc-404-products.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/404/cc-404-products.tpl.html",
    "<div class=\"cc-404\" bindonce=\"ln\">\n" +
    "    <i class=\"cc-404__icon fa fa-frown-o\"></i>\n" +
    "    <h1 class=\"cc-title--huge\">\n" +
    "        <span bo-text=\"ln.categoryHasNoProducts\"></span>\n" +
    "    </h1>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/404/cc-404.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/404/cc-404.tpl.html",
    "<div class=\"cc-404\" bindonce=\"ln\">\n" +
    "    <i class=\"cc-404__icon fa fa-frown-o\"></i>\n" +
    "    <h1 class=\"cc-title--huge\">\n" +
    "        <span bo-text=\"ln.pageDoesntExist\"></span>\n" +
    "    </h1>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/contextviews/cc-context-view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/contextviews/cc-context-view.tpl.html",
    "<div class=\"cc-context-view\">\n" +
    "    <div class=\"cc-context-view__handle\" ng-click=\"close()\">\n" +
    "        <i class=\"cc-context-view__close-icon\"></i>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"cc-context-view__content\">\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("common/dialog/cc-dialog.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/dialog/cc-dialog.tpl.html",
    "<div class=\"modal-header\">\n" +
    "    <h1>{{ title }}</h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "    <p ng-bind-html=\"message\"></p>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button\n" +
    "        ng-repeat=\"btn in buttons\"\n" +
    "        ng-click=\"close(btn.result)\"\n" +
    "        class=\"cc-dialog__button\" ng-class=\"btn.cssClass\">{{ btn.label }}\n" +
    "    </button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/dialog/cc-loading-dialog.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/dialog/cc-loading-dialog.tpl.html",
    "<div class=\"cc-loading-dialog\">\n" +
    "    <cc-loading-spinner></cc-loading-spinner>\n" +
    "</div>");
}]);

angular.module("common/footer/cc-footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/footer/cc-footer.tpl.html",
    "<footer class=\"cc-footer\" bindonce=\"config\">\n" +
    "    <cc-footer-links></cc-footer-links>\n" +
    "\n" +
    "    <ul class=\"cc-trust-list\">\n" +
    "        <li bo-if=\"config.trustedShopsEnabled\" ng-click=\"showTrustedShopsCertificate()\" class=\"cc-trust-list__item\">\n" +
    "            <i class=\"cc-trust-list__icon cc-trusted-shops-icon\"></i>\n" +
    "            <span class=\"cc-trust-list__text\" bindonce bo-text=\"ln.tsButtonTitle\"></span>\n" +
    "        </li>\n" +
    "        <li bo-if=\"config.showAppExitLink\" ng-click=\"exitWebApp()\" class=\"cc-trust-list__item\">\n" +
    "            <i class=\"cc-trust-list__icon cc-exit-link-icon\"></i>\n" +
    "            <span class=\"cc-trust-list__text\" bindonce bo-text=\"ln.showDesktopView\"></span>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "\n" +
    "</footer>\n" +
    "");
}]);

angular.module("common/header/cc-header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/header/cc-header.tpl.html",
    "<div class=\"cc-header\" ng-controller=\"HeaderController\">\n" +
    "    <div class=\"cc-header__icon-wrapper--left\">\n" +
    "        <i class=\"cc-header__icon cc-header__icon--sidemenu\" snap-toggle></i>\n" +
    "    </div>\n" +
    "    <div class=\"cc-header__icon-wrapper--right\">\n" +
    "        <i class=\"cc-header__icon cc-header__icon--cart\" ng-click=\"snapCart()\">\n" +
    "            <span class=\"cc-header__icon-badge--cart\" ng-bind=\"basketItemCount\" ng-show=\"basketItemCount > 0\"></span>\n" +
    "        </i>\n" +
    "    </div>\n" +
    "    <div ng-if=\"cfg.showSearch\" class=\"cc-header__icon-wrapper--right\">\n" +
    "        <i class=\"cc-header__icon cc-header__icon--search\" ng-click=\"showSearch()\"></i>\n" +
    "    </div>\n" +
    "    <a class=\"cc-header__logo\" href=\"/\"></a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/shell/shell.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/shell/shell.tpl.html",
    "<div class=\"cc-app-wrapper\">\n" +
    "    <div class=\"snap-drawers\">\n" +
    "        <div snap-drawer ng-include=\"tpl.SIDE_MENU\"></div>\n" +
    "        <div snap-drawer=\"right\" ng-controller=\"CartController\" ng-include=\"tpl.CART\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"cc-main-wrapper\" snap-content>\n" +
    "        <div cc-include=\"tpl.HEADER\"></div>\n" +
    "        <div class=\"cc-page-wrapper cc-image-full-screen__hide-marker\"\n" +
    "             ng-show=\"!searchUiState.isOpen() || (!searchUiState.hasResults() && !searchUiState.hasNoMatch())\">\n" +
    "            <div class=\"cc-ui-view cc-animate\" ui-view></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"cc-search-wrapper\">\n" +
    "        <div cc-include=\"tpl.SEARCH_BOX\"></div>\n" +
    "        <div cc-include=\"tpl.SEARCH_RESULT\"></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("common/sidemenu/cc-side-menu.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/sidemenu/cc-side-menu.tpl.html",
    "<div class=\"cc-side-menu cc-side-menu--navigation\" ng-controller=\"SidemenuController\">\n" +
    "    <div class=\"cc-side-menu__header\">\n" +
    "        <div class=\"cc-side-menu-tabs\">\n" +
    "            <i class=\"cc-side-menu-tabs__icon cc-side-menu-tabs__icon--categories\"\n" +
    "               ng-class=\"{'cc-side-menu-tabs__icon--active': sidemenuUiState.activeTab === 'categories'}\"\n" +
    "               ng-click=\"sidemenuUiState.setActiveTab('categories')\"></i>\n" +
    "            <i class=\"cc-side-menu-tabs__icon\"\n" +
    "               ng-class=\"{\n" +
    "                   'cc-side-menu-tabs__icon--active': sidemenuUiState.activeTab === 'wishlist',\n" +
    "                   'cc-side-menu-tabs__icon--wishlist': !isEmpty,\n" +
    "                   'cc-side-menu-tabs__icon--wishlist--empty': isEmpty}\"\n" +
    "               ng-click=\"sidemenuUiState.setActiveTab('wishlist')\" cc-wishlist-state></i>\n" +
    "        </div>\n" +
    "        <div class=\"cc-side-menu-tabs-title\">\n" +
    "            <span ng-bind=\"ln.categories\" ng-show=\"sidemenuUiState.activeTab === 'categories'\"></span>\n" +
    "            <span ng-bind=\"ln.wishlist\" ng-show=\"sidemenuUiState.activeTab === 'wishlist'\"></span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"cc-side-menu__content\">\n" +
    "        <div class=\"cc-side-menu__scroll-container\" ng-show=\"sidemenuUiState.activeTab === 'categories'\">\n" +
    "            <div class=\"cc-sticky-view-wrapper\">\n" +
    "                <div class=\"cc-sticky-view-wrapper__content\">\n" +
    "                    <cc-category-tree-view></cc-category-tree-view>\n" +
    "                </div>\n" +
    "                <div class=\"cc-sticky-view-wrapper__footer\">\n" +
    "                    <div class=\"cc-side-menu__footer\">\n" +
    "                        <cc-footer-links></cc-footer-links>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"cc-side-menu__scroll-container\" ng-controller=\"WishlistController\" ng-include=\"tpl.WISHLIST\" ng-show=\"sidemenuUiState.activeTab === 'wishlist'\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/totalbox/cc-cart-total-panel.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/totalbox/cc-cart-total-panel.tpl.html",
    "<ul class=\"cc-cart-total-panel cc-properties--block\">\n" +
    "    <li>\n" +
    "        <span class=\"cc-properties__key\" ng-bind=\"ln.summarySubtotal\" ></span>\n" +
    "        <span class=\"cc-properties__value\" ng-bind=\"summary.sum | currency\"></span>\n" +
    "    </li>\n" +
    "    <li ng-if=\"summary.shipping !== null\">\n" +
    "        <span class=\"cc-properties__key\" ng-bind=\"ln.summaryShipping\" ></span>\n" +
    "        <span class=\"cc-properties__value\" ng-bind=\"summary.shipping | currency\"></span>\n" +
    "    </li>\n" +
    "    <li ng-if=\"summary.shipping === null\">\n" +
    "        <a class=\"cc-link\" ng-click=\"navigationService.navigateToShippingCostsPage()\">{{ln.shippingCostsGeneric}}</a>\n" +
    "    </li>\n" +
    "    <li ng-show=\"summary.surcharge\">\n" +
    "        <span class=\"cc-properties__key\" ng-bind=\"ln.surcharge\" ></span>\n" +
    "        <span class=\"cc-properties__value\" ng-bind=\"summary.surcharge | currency\"></span>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <span class=\"cc-properties__key\" ng-bind=\"ln.summaryTaxLabel\"></span>\n" +
    "        <span class=\"cc-properties__value\" ng-bind=\"summary.vat | currency\"></span>\n" +
    "    </li>\n" +
    "    <li class=\"cc-cart-total-panel__line\" ng-repeat=\"coupon in coupons\">\n" +
    "        <span class=\"cc-properties__key\">\n" +
    "            <span ng-bind=\"ln.promotionCode\"></span> <span ng-bind=\"coupon.name\"></span>\n" +
    "        </span>\n" +
    "        <span class=\"cc-properties__value\" ng-bind=\"-coupon.amount | currency\"></span>\n" +
    "    </li>\n" +
    "    <li class=\"cc-cart-total-panel__grand-total\">\n" +
    "        <span class=\"cc-properties__key\" ng-bind=\"ln.summaryGrandTotalLabel\"></span>\n" +
    "        <span class=\"cc-properties__value\" ng-bind=\"summary.total | currency\"></span>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("pages/cc-context-pages.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/cc-context-pages.tpl.html",
    "<div class=\"cc-view-wrapper\">\n" +
    "\n" +
    "    <div class=\"cc-sticky-view-wrapper\">\n" +
    "\n" +
    "        <div class=\"cc-sticky-view-wrapper__content\">\n" +
    "\n" +
    "            <div class=\"cc-pages__header-block\">\n" +
    "                <div class=\"cc-pages__header\">\n" +
    "                    <h1 class=\"cc-title--huge\" ng-bind=\"page.title\"></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <cc-inject target=\"beneathTitle\"></cc-inject>\n" +
    "\n" +
    "            <div class=\"cc-pages__content-box\">\n" +
    "                <div ng-bind-html=\"page.content\"></div>\n" +
    "                <div ng-if=\"page.content\">\n" +
    "                    <a class=\"cc-pages__send-as-mail\" href=\"{{mailTo}}\" ng-bind=\"ln.sendCmsMail\"></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"isLoading\" class=\"cc-pages__loading-box\">\n" +
    "                <cc-loading-spinner class=\"cc-pages__loading-box-spinner\"></cc-loading-spinner>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-include=\"tpl.404\" ng-if=\"!page.content && !isLoading\"></div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("pages/cc-pages.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pages/cc-pages.tpl.html",
    "<div cc-scroller-announcer class=\"cc-view-wrapper\">\n" +
    "\n" +
    "    <div class=\"cc-sticky-view-wrapper\">\n" +
    "\n" +
    "        <div class=\"cc-sticky-view-wrapper__content\">\n" +
    "            <cc-inject target=\"aboveContent\"></cc-inject>\n" +
    "\n" +
    "            <div class=\"cc-pages__header-block\">\n" +
    "                <div class=\"cc-pages__up-nav\">\n" +
    "                    <cc-go-back-button>\n" +
    "                        <i class=\"cc-go-back-button__icon\"></i>\n" +
    "                        <span class=\"cc-go-back-button__text\" ng-bind=\"ln.back\"></span>\n" +
    "                    </cc-go-back-button>\n" +
    "                </div>\n" +
    "                <div class=\"cc-pages__header\">\n" +
    "                    <h1 class=\"cc-title--huge\" ng-bind=\"page.title\"></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <cc-inject target=\"beneathTitle\"></cc-inject>\n" +
    "\n" +
    "            <div class=\"cc-pages__content-box\">\n" +
    "                <div ng-bind-html=\"page.content\"></div>\n" +
    "                <div ng-if=\"page.content\">\n" +
    "                    <a class=\"cc-pages__send-as-mail\" href=\"{{mailTo}}\" ng-bind=\"ln.sendCmsMail\"></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"isLoading\" class=\"cc-pages__loading-box\">\n" +
    "                <cc-loading-spinner class=\"cc-pages__loading-box-spinner\"></cc-loading-spinner>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-include=\"tpl.404\" ng-if=\"!page.content && !isLoading\"></div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"cc-sticky-view-wrapper__footer\">\n" +
    "            <cc-inject target=\"aboveFooter\"></cc-inject>\n" +
    "            <cc-footer></cc-footer>\n" +
    "            <cc-inject target=\"beneathFooter\"></cc-inject>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("product/cc-product-buy-box.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("product/cc-product-buy-box.tpl.html",
    "<div class=\"cc-product-buy-box cc-grid--fixed\" bindonce=\"ln\">\n" +
    "\n" +
    "    <div class=\"cc-product-buy-box__info-text\">\n" +
    "        <span bindonce=\"product\" bo-html=\"product.delivery\"></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"cc-grid__row\">\n" +
    "\n" +
    "        <div class=\"cc-grid__cell--1-2\">\n" +
    "\n" +
    "            <cc-price product=\"product\" selected-variant=\"selectedVariant\"></cc-price>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"cc-grid__cell--1-2\">\n" +
    "            <cc-wishlist-button product=\"product\"\n" +
    "                button-text-add=\"ln.addToWishlist\"\n" +
    "                button-text-remove=\"ln.removeFromWishlist\">\n" +
    "            </cc-wishlist-button>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"cc-product-buy-box__info-text\">\n" +
    "\n" +
    "        <span class=\"cc-product-buy-box__base-price-info\" ng-bind=\"getBasePriceInfo()\"></span>\n" +
    "\n" +
    "        <span class=\"cc-product-buy-box__tax-info\" ng-bind=\"productTaxText\"></span>\n" +
    "\n" +
    "        <span class=\"cc-product-buy-box__shipping-info\" ng-if=\"cfg.shippingCost !== null\" ng-bind=\"shippingCosts\"></span>\n" +
    "\n" +
    "        <div class=\"cc-product-buy-box__shipping-info\" ng-if=\"cfg.shippingCost === null\">\n" +
    "            <a class=\"cc-link\" ng-click=\"navigationService.navigateToShippingCostsPage()\" bo-text=\"ln.shippingCostsGeneric\"></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <a class=\"cc-product-buy-box__add-to-cart\"\n" +
    "       ng-click=\"addToBasket(product)\"\n" +
    "       ng-if=\"!product.isOutOfStock()\"\n" +
    "       bo-text=\"ln.addToCart\">\n" +
    "    </a>\n" +
    "\n" +
    "    <span class=\"cc-product-buy-box__sold-out\"\n" +
    "          ng-if=\"product.isOutOfStock()\"\n" +
    "          bo-text=\"ln.soldOut\">\n" +
    "    </span>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("product/cc-product-wide.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("product/cc-product-wide.tpl.html",
    "<div cc-scroller-announcer class=\"cc-view-wrapper cc-flex-column\">\n" +
    "\n" +
    "        <div bindonce=\"product\" ng-if=\"product\" class=\"cc-product--tablet\">\n" +
    "\n" +
    "            <div class=\"cc-product__header-block\">\n" +
    "\n" +
    "                <div class=\"cc-product__up-nav\">\n" +
    "                    <cc-go-up-control category=\"upCategory\"></cc-go-up-control>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-product__header\">\n" +
    "                    <h1 bo-text=\"product.name\" class=\"cc-title--huge\"></h1>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"cc-product__content-block\">\n" +
    "\n" +
    "                <div class=\"cc-product__image-block\">\n" +
    "\n" +
    "                    <div class=\"cc-flex-image-helper\">\n" +
    "                        <div class=\"cc-product-view-image-wrapper\" ng-class=\"{'cc-img-loading': !selectedImage.loaded}\">\n" +
    "                            <img ng-src=\"{{selectedImage.url}}\"\n" +
    "                                 cc-image-zoom\n" +
    "                                 cc-image-full-screen\n" +
    "                                 class=\"cc-product-view-image\"\n" +
    "                                 zoom-anim-duration=\"500\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <cc-thumbnail-bar\n" +
    "                            ng-show=\"images.length > 1\"\n" +
    "                            images=\"productImages\"\n" +
    "                            on-change=\"changeImage(image)\">\n" +
    "                    </cc-thumbnail-bar>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-product__info-block\">\n" +
    "\n" +
    "                    <div class=\"cc-product__primary-info\">\n" +
    "\n" +
    "                        <cc-variant-selector\n" +
    "                            choose-text=\"ln.choose\"\n" +
    "                            variants=\"product.variants\"\n" +
    "                            variant=\"variants.selectedVariant\"\n" +
    "                            selected-properties=\"variants.selectedProperties\">\n" +
    "                        </cc-variant-selector>\n" +
    "\n" +
    "                        <div cc-include=\"tpl.PRODUCT_BUY_BOX\"></div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"cc-product__content-box cc-scroll-area\">\n" +
    "\n" +
    "                        <cc-zippy caption=\"ln.productDetails\" init-opened=\"true\">\n" +
    "                            <div class=\"cc-unstyled cc-product-description\" ng-bind-html=\"$sce.trustAsHtml(product.description)\"></div>\n" +
    "                        </cc-zippy>\n" +
    "\n" +
    "                        <cc-zippy caption=\"ln.productSpecifications\">\n" +
    "                            <ul class=\"cc-properties--block\">\n" +
    "                                <li ng-repeat=\"(key, value) in product.attributes track by key\">\n" +
    "                                    <span class=\"cc-properties__key\">{{key}}</span>\n" +
    "                                    <span class=\"cc-properties__value\" ng-bind-html=\"$sce.trustAsHtml(value)\"></span>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </cc-zippy>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"!product\" ng-include=\"tpl.404\"></div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("product/cc-product.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("product/cc-product.tpl.html",
    "<div cc-scroller-announcer class=\"cc-scroller--if-fixed cc-view-wrapper\">\n" +
    "    <cc-inject target=\"aboveContent\"></cc-inject>\n" +
    "\n" +
    "    <div bindonce=\"product\" ng-if=\"product\">\n" +
    "\n" +
    "        <div class=\"cc-product__header-block\">\n" +
    "\n" +
    "            <div class=\"cc-product__up-nav\">\n" +
    "                <cc-go-up-control category=\"upCategory\"></cc-go-up-control>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"cc-product__header\">\n" +
    "                <h1 bo-text=\"product.name\" class=\"cc-title--huge\"></h1>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <cc-inject target=\"beneathTitle\"></cc-inject>\n" +
    "\n" +
    "        <div class=\"cc-product-view-image-wrapper\" ng-class=\"{'cc-img-loading': !selectedImage.loaded}\">\n" +
    "            <img ng-src=\"{{selectedImage.url}}\"\n" +
    "                 cc-image-zoom\n" +
    "                 cc-image-full-screen\n" +
    "                 class=\"cc-product-view-image\"\n" +
    "                 zoom-anim-duration=\"500\">\n" +
    "        </div>\n" +
    "\n" +
    "        <cc-thumbnail-bar\n" +
    "                ng-show=\"images.length > 1\"\n" +
    "                images=\"productImages\"\n" +
    "                on-change=\"changeImage(image)\">\n" +
    "        </cc-thumbnail-bar>\n" +
    "\n" +
    "        <cc-variant-selector\n" +
    "            choose-text=\"ln.choose\"\n" +
    "            variants=\"product.variants\"\n" +
    "            variant=\"variants.selectedVariant\"\n" +
    "            selected-properties=\"variants.selectedProperties\">\n" +
    "        </cc-variant-selector>\n" +
    "\n" +
    "        <div cc-include=\"tpl.PRODUCT_BUY_BOX\"></div>\n" +
    "\n" +
    "        <div class=\"cc-product__content-box\" ng-if=\"product.description || product.hasAttributes()\">\n" +
    "\n" +
    "            <cc-zippy caption=\"ln.productDetails\" init-opened=\"true\" ng-if=\"product.description\">\n" +
    "                <div class=\"cc-cms-content cc-product-description\" ng-bind-html=\"product.description\"></div>\n" +
    "            </cc-zippy>\n" +
    "\n" +
    "            <cc-zippy caption=\"ln.productSpecifications\" ng-if=\"product.hasAttributes()\">\n" +
    "                <ul class=\"cc-properties--block\">\n" +
    "                    <li ng-repeat=\"(key, value) in product.attributes track by key\">\n" +
    "                        <span class=\"cc-properties__key\">{{key}}</span>\n" +
    "                        <span class=\"cc-properties__value\" ng-bind-html=\"$sce.trustAsHtml(value)\"></span>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </cc-zippy>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"!product\" ng-include=\"tpl.404\"></div>\n" +
    "\n" +
    "    <cc-inject target=\"aboveFooter\"></cc-inject>\n" +
    "    <cc-footer></cc-footer>\n" +
    "    <cc-inject target=\"beneathFooter\"></cc-inject>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("products/cc-product-grid.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("products/cc-product-grid.tpl.html",
    "<div cc-scroller-announcer bindonce=\"products\" class=\"cc-view-wrapper\">\n" +
    "\n" +
    "    <div class=\"cc-sticky-view-wrapper\">\n" +
    "\n" +
    "        <div class=\"cc-sticky-view-wrapper__content\">\n" +
    "            <cc-inject target=\"aboveContent\"></cc-inject>\n" +
    "\n" +
    "            <div class=\"cc-products__header-block\">\n" +
    "                <div class=\"cc-products__up-nav\">\n" +
    "                    <cc-go-up-control home-text=\"{{ ln.home }}\" category=\"category\"></cc-go-up-control>\n" +
    "                </div>\n" +
    "                <div class=\"cc-products__header\">\n" +
    "                    <h1 class=\"cc-title--huge\" bo-text=\"headline\"></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div bo-if=\"products.length > 0\">\n" +
    "\n" +
    "                <div class=\"cc-products__controls\">\n" +
    "                <span ng-if=\"isTabletSize\" class=\"cc-products__product-count\">\n" +
    "                    <b bo-text=\"products.length\"></b>\n" +
    "                    <span bo-text=\"ln.productCountText\"></span>\n" +
    "                </span>\n" +
    "                    <cc-select-box\n" +
    "                            model=\"sortModel.sortBy\"\n" +
    "                            data=\"sortModel.sortTypes\"\n" +
    "                            choose-text=\"ln.sortBy\"\n" +
    "                            display-value-exp=\"'title'\">\n" +
    "                    </cc-select-box>\n" +
    "                </div>\n" +
    "\n" +
    "                <ul class=\"cc-products__list\">\n" +
    "                    <li ng-repeat=\"product in products | orderBy:sortModel.sortBy.key:sortModel.sortBy.reverse\"\n" +
    "                        class=\"cc-list__item\">\n" +
    "\n" +
    "                        <a\n" +
    "                            ng-class=\"{ 'cc-highlight--out': backStepHighlightService.isHighlighted(product) }\"\n" +
    "                            ng-href=\"{{ product.getOriginFullUrl() }}\"\n" +
    "                            ng-click=\"goToProduct(product, $event)\"\n" +
    "                            class=\"cc-product-item\">\n" +
    "\n" +
    "                            <div class=\"cc-product-item__media-wrapper\">\n" +
    "                                <div class=\"cc-product-item__media\">\n" +
    "                                    <img class=\"cc-product-item__image\" cc-src=\"product.getImage('large')\" cc-src-config=\"{maxwidth: 140, maxheight: 140}\" cc-src-spinner=\"true\" alt=\"\"/>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"cc-product-item__info-wrapper\">\n" +
    "                                <strong class=\"cc-product-item__title\" bo-text=\"product.name\"></strong>\n" +
    "\n" +
    "                                <cc-price product=\"product\"></cc-price>\n" +
    "                                <div class=\"cc-product-item__base-price-info\" ng-bind=\"productService.getBasePriceInfo(product)\"></div>\n" +
    "                            </div>\n" +
    "\n" +
    "                        </a>\n" +
    "\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "\n" +
    "            <div bo-if=\"products.length === 0\">\n" +
    "                <div ng-include=\"tpl.404_PRODUCTS\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"cc-sticky-view-wrapper__footer\">\n" +
    "            <cc-inject target=\"aboveFooter\"></cc-inject>\n" +
    "            <cc-footer></cc-footer>\n" +
    "            <cc-inject target=\"beneathFooter\"></cc-inject>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("search/cc-search-box.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/cc-search-box.tpl.html",
    "<div ng-class=\"{'cc-search-box--opened': vm.searchUiState.isOpen(), 'cc-search-box--closed' : !vm.searchUiState.isOpen() }\" ng-controller=\"SearchController as vm\">\n" +
    "    <i class=\"cc-search-box__close fa fa-angle-up\" ng-click=\"searchUiState.abort()\"></i>\n" +
    "\n" +
    "    <div class=\"cc-search-box__input-wrapper\">\n" +
    "        <cc-search-field ng-model=\"searchUiState.searchTerm\" placeholder-text=\"ln.productSearchPlaceholder\" focus=\"searchUiState.isOpen()\"></cc-search-field>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"cc-modal\"\n" +
    "     ng-click=\"searchUiState.abort()\"\n" +
    "     ng-show=\"(searchUiState.isOpen() && !searchUiState.hasResults()) || (searchUiState.isOpen() && searchUiState.isRunningSearch)\">\n" +
    "\n" +
    "    <cc-loading-spinner class=\"cc-loading-spinner--centered\"\n" +
    "            ng-show=\"searchUiState.isRunningSearch\">\n" +
    "    </cc-loading-spinner>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"cc-modal--solid\" ng-show=\"searchUiState.hasNoMatch()\">\n" +
    "\n" +
    "    <div bindonce=\"ln\" class=\"cc-search-no-result\">\n" +
    "        <p bo-text=\"ln.searchNotFound\"></p>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("search/cc-search-result.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/cc-search-result.tpl.html",
    "<div ng-controller=\"SearchResultController as vm\" ng-show=\"vm.searchUiState.isOpen() && vm.searchUiState.hasResults()\" class=\"cc-content cc-search-result\">\n" +
    "    <div class=\"cc-view-wrapper\">\n" +
    "        <ul class=\"cc-search-result__group-list\">\n" +
    "            <li class=\"cc-search-result__group\" ng-repeat=\"result in vm.searchUiState.results\">\n" +
    "                <div\n" +
    "                    class=\"cc-search-result__group-header\"\n" +
    "                    ng-click=\"vm.goToCategory(result)\">\n" +
    "                    <span ng-bind-html=\"vm.createGroupText(result)\"></span>\n" +
    "                </div>\n" +
    "                <ul class=\"cc-search-result__item-list\">\n" +
    "                    <li\n" +
    "                        ng-repeat=\"product in result.items\"\n" +
    "                        ng-click=\"vm.goToProduct(product)\"\n" +
    "                        class=\"cc-search-result__item\">\n" +
    "                        <div class=\"cc-search-result__item-image-wrapper\">\n" +
    "                            <img class=\"cc-search-result__item-image\" cc-src=\"product.productImageUrl\" cc-src-config=\"{maxwidth: 50, maxheight: 50}\" alt=\"\"/>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"cc-search-result__item-text-wrapper\">\n" +
    "                            <span ng-bind=\"product.text\"></span>\n" +
    "                            <i class=\"cc-search-result__item-icon\"></i>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("summary/cc-summary.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("summary/cc-summary.tpl.html",
    "<div ng-show=\"vm.page === vm.SUMMARY_PAGE\" bindonce=\"ln\" class=\"cc-scroller--if-fixed cc-view-wrapper\">\n" +
    "\n" +
    "    <div class=\"cc-checkout__header-block\">\n" +
    "\n" +
    "        <div class=\"cc-checkout__up-nav\">\n" +
    "            <cc-go-back-button>\n" +
    "                <i class=\"cc-go-back-button__icon\"></i>\n" +
    "                <span class=\"cc-go-back-button__text\" ng-bind=\"ln.back\"></span>\n" +
    "            </cc-go-back-button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"cc-checkout__header\">\n" +
    "            <h1 bo-text=\"ln.summary\" class=\"cc-title--huge\"></h1>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"cc-checkout__wrapper\">\n" +
    "\n" +
    "        <section class=\"cc-summary__info\">\n" +
    "            <div class=\"cc-grid__row\">\n" +
    "                <div class=\"cc-grid__cell--1-2\">\n" +
    "                    <h2 class=\"cc-title--big\">{{ln.billingAddress}}</h2>\n" +
    "                    <cc-address class=\"cc-summary__info-data\" data=\"vm.invoiceAddress\"></cc-address>\n" +
    "                </div>\n" +
    "                <div class=\"cc-grid__cell--1-2\">\n" +
    "                    <h2 class=\"cc-title--big\">{{ln.shippingAddress}}</h2>\n" +
    "                    <cc-address class=\"cc-summary__info-data\" data=\"vm.shippingAddress\"></cc-address>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"cc-grid__row\">\n" +
    "                <div class=\"cc-grid__cell--1-2\">\n" +
    "                    <h2 class=\"cc-title--big\">{{ln.paymentMethod}}</h2>\n" +
    "                    <div class=\"cc-summary__info-data\">{{vm.paymentMethod}}</div>\n" +
    "                </div>\n" +
    "                <div class=\"cc-grid__cell--1-2\">\n" +
    "                    <h2 class=\"cc-title--big\">{{ln.shippingMethod}}</h2>\n" +
    "                    <div class=\"cc-summary__info-data\">{{vm.shippingMethod}}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "\n" +
    "        <section class=\"cc-summary__cart\">\n" +
    "            <!-- This borrows some classes from the cart. I think the real problem is the\n" +
    "            seperation of cart, summary and thankyou page. This should all live in one directory\n" +
    "            called \"checkout\" or something like that. Then the styles could be named\n" +
    "            cc-checkout-list and be used across both screens. No? -->\n" +
    "            <ul class=\"cc-cart-list\">\n" +
    "                <li ng-repeat=\"item in vm.items\" class=\"cc-cart-list__item\">\n" +
    "                    <img class=\"cc-cart-list__item-image\" cc-src=\"item.imageURL\" cc-src-config=\"{maxwidth: 50, maxheight: 50}\" />\n" +
    "                    <div class=\"cc-cart-list__item-content\">\n" +
    "                        <strong class=\"cc-cart-list__item-title\">{{item.name}}</strong>\n" +
    "\n" +
    "                        <ul class=\"cc-cart-list__item-variants\">\n" +
    "                            <li ng-repeat=\"(variantProperty, variantPropertyValue) in item.optionSelected.properties\">\n" +
    "                                <span class=\"cc-properties__key\">{{variantProperty}}:</span>\n" +
    "                                <span class=\"cc-properties__value\">{{variantPropertyValue}}</span>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"cc-cart-list__item-footer\">\n" +
    "\n" +
    "                        <!-- TODO: make special price available -->\n" +
    "                        <span class=\"cc-cart__item-price\">\n" +
    "                            {{item.qty}} &times;\n" +
    "                            <cc-price product=\"item\"></cc-price>\n" +
    "                        </span>\n" +
    "\n" +
    "                        <span class=\"cc-cart__item-price--total\">\n" +
    "                            {{item.subtotal | currency}}\n" +
    "                        </span>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <!-- is that a candidate for a cc-total-box directive? -->\n" +
    "            <div ng-include=\"tpl.TOTALBOX\"></div>\n" +
    "        </section>\n" +
    "\n" +
    "        <section class=\"cc-summary__agreements\">\n" +
    "            <!-- For some reason, ng-show's not working here. However, ng-if is fine, too -->\n" +
    "            <cc-check-box\n" +
    "                    ng-if=\"vm.showGeneralAgreement\"\n" +
    "                    class=\"cc-check-box-on-background\"\n" +
    "                    value=\"vm.generalAgreement\"\n" +
    "                    label=\"ln.combinedAgreement\"\n" +
    "                    agreement=\"ln.combinedAgreement\">\n" +
    "            </cc-check-box>\n" +
    "\n" +
    "            <!-- For some reason, ng-show's not working here. However, ng-if is fine, too -->\n" +
    "            <cc-check-box\n" +
    "                    ng-if=\"vm.showAgeAgreement\"\n" +
    "                    class=\"cc-check-box-on-background\"\n" +
    "                    value=\"vm.ageAgreement\"\n" +
    "                    label=\"ln.ageAgreement\">\n" +
    "            </cc-check-box>\n" +
    "\n" +
    "            <div class=\"cc-summary__finish-wrapper\">\n" +
    "                <a  ng-click=\"acceptedAgreements() && proceed()\"\n" +
    "                    ng-disabled=\"!acceptedAgreements()\"\n" +
    "                    ng-class=\"acceptedAgreements() ? 'cc-checkout-button' : 'cc-checkout-button--disabled'\"\n" +
    "                        >{{ ln.buyButton }}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "\n" +
    "        </section>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <cc-footer></cc-footer>\n" +
    "</div>\n" +
    "");
}]);

angular.module("thankyou/cc-thankyou.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("thankyou/cc-thankyou.tpl.html",
    "<div bindonce=\"ln\" class=\"cc-scroller--if-fixed cc-view-wrapper cc-center\">\n" +
    "\n" +
    "    <div class=\"cc-sticky-view-wrapper\">\n" +
    "\n" +
    "        <div class=\"cc-sticky-view-wrapper__content\">\n" +
    "\n" +
    "            <div class=\"cc-checkout__header-block\">\n" +
    "\n" +
    "                <div class=\"cc-checkout__header\">\n" +
    "                    <h1 bo-text=\"ln.thankYouTitle\" class=\"cc-title--huge\"></h1>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"cc-checkout__wrapper\">\n" +
    "\n" +
    "                <div ng-bind-html=\"ln.thankYouText\"></div>\n" +
    "\n" +
    "                <a ng-click=\"navigationService.navigateToRootCategory()\" class=\"cc-checkout-button\">{{ ln.continueShopping }}</a>\n" +
    "\n" +
    "                <div ng-if=\"cfg.trustedShopsEnabled\" class=\"cc-trusted-shops-thankyou\">\n" +
    "                    <div>\n" +
    "                        <img class=\"cc-trusted-shops-dialog__image\" ng-src=\"../assets/images/trustedshops_de-DE.jpg\">\n" +
    "                        <p ng-bind-html=\"ln.tsRegistrationBuyerProtection\"></p>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <form id=\"formTShops\" name=\"formTShops\" method=\"post\"\n" +
    "                          action=\"https://www.trustedshops.com/shop/protection.php\" target=\"_blank\">\n" +
    "\n" +
    "                        <input name=\"_charset_\" type=\"hidden\" value=\"\">\n" +
    "                        <input name=\"shop_id\" type=\"hidden\" value=\"{{ cfg.trustedShopsId }}\">\n" +
    "                        <input name=\"email\" type=\"hidden\" value=\"\">\n" +
    "                        <input name=\"amount\" type=\"hidden\" value=\"{{ vm.summary.total }}\">\n" +
    "                        <input name=\"curr\" type=\"hidden\" value=\"{{ cfg.currency }}\">\n" +
    "                        <input name=\"paymentType\" type=\"hidden\" value=\"{{ vm.trustedShopsPaymentIdentifier }}\">\n" +
    "                        <input name=\"kdnr\" type=\"hidden\" value=\"-\">\n" +
    "                        <input name=\"ordernr\" type=\"hidden\" value=\"-\">\n" +
    "\n" +
    "                        <input type=\"submit\" class=\"cc-checkout-button\" value=\"{{ ln.tsButtonBuyerProtection }}\">\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"cc-sticky-view-wrapper__footer\">\n" +
    "            <cc-footer></cc-footer>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("trustedshops/cc-trusted-shops.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("trustedshops/cc-trusted-shops.tpl.html",
    "<div cc-scroller-announcer class=\"cc-view-wrapper cc-trusted-shops-view\">\n" +
    "    <img class=\"cc-trusted-shops-dialog__image\" ng-src=\"../assets/images/gplv3-127x51.png\">\n" +
    "\n" +
    "    <h1 class=\"cc-title--huge\" ng-bind=\"ln.tsOverlayTitle\"></h1>\n" +
    "\n" +
    "    <div ng-bind-html=\"ln.tsOverlayExplanation\"></div>\n" +
    "\n" +
    "    <p>Sponsorowanie hostingu oraz organizaje rozwoju projektu zapewnia firma <a href=\"http://www.sviete.pl\">Sviete</a>.</p>\n" +
    "    <p>Kod projektu bazuje na otwartych rozwiązaniach i jest dostępny na licencji wolnego i otwartego oprogramowania: <a href=\"http://www.gnu.org/copyleft/gpl.html\">GNU GPL v3</a>\n" +
    "    </p>\n" +
    "\n" +
    "    <p>Repoozytorium kodu projektu: <a href=\"{{ cfg.gitHubRepoUrl }}\"> {{ cfg.gitHubRepoUrl }} </a>\n" +
    "    </p>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("wishlist/cc-wishlist-button.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wishlist/cc-wishlist-button.tpl.html",
    "<span class=\"cc-wishlist-button\"\n" +
    "   ng-class=\"{'cc-wishlist-button--active': wishlistService.exists(product.urlKey)}\"\n" +
    "   ng-click=\"toggleItem()\">\n" +
    "    <span class=\"cc-wishlist-button__text\"\n" +
    "        ng-bind=\"wishlistService.exists(product.urlKey) ? buttonTextRemove : buttonTextAdd\"></span>\n" +
    "</span>");
}]);

angular.module("wishlist/cc-wishlist.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wishlist/cc-wishlist.tpl.html",
    "<div class=\"cc-wishlist\" bindonce=\"ln\">\n" +
    "\n" +
    "    <div class=\"cc-wishlist__empty-hint\" ng-show=\"isEmpty\">\n" +
    "        <div class=\"cc-wishlist__empty-hint-icon\"></div>\n" +
    "        <p bo-text=\"ln.wishlistEmpty\"></p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"showFirstUseInfo\" class=\"cc-wishlist__first-use-hint\" bo-html=\"ln.wishlistFirstUse\"></div>\n" +
    "\n" +
    "    <ul class=\"cc-wishlist-list\" ng-show=\"!isEmpty\">\n" +
    "        <li ng-repeat=\"(key,item) in wishlist\" class=\"cc-wishlist-list__item cc-animate\"\n" +
    "            ng-click=\"navigateToProduct(item.product)\">\n" +
    "\n" +
    "            <div class=\"cc-wishlist-list-item__wrapper\">\n" +
    "                <img class=\"cc-wishlist-list__item-image\" cc-src=\"item.product.getImage('large')\" cc-src-config=\"{maxwidth: 50, maxheight: 50}\" alt=\"\"/>\n" +
    "                <div class=\"cc-wishlist-list__item-content\">\n" +
    "                    <strong class=\"cc-wishlist-list__item-title\" ng-bind=\"item.product.name\"></strong>\n" +
    "\n" +
    "                    <span class=\"cc-wishlist__item-price\">\n" +
    "                        <cc-price product=\"item.product\" selected-variant=\"item.variant\"></cc-price>\n" +
    "                    </span>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cc-wishlist-list__item-footer\">\n" +
    "                    <span ng-click=\"removeItem(item); $event.stopPropagation()\" class=\"cc-wishlist-button--remove\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>");
}]);
