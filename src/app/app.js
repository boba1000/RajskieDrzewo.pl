'use strict';
/* global sofa */
/* global FastClick */
/* global document */


// We have to patch up the old URLs which were without hashbangs to use a hashbang instead.
// We do that before Angular starts and it has probably no business directly in sofa hence we put it here.

(function () {
    var url = window.location.toString();
    if (url.indexOf('#') > - 1) {
        window.location = url.replace('#', '#!');
    }
})();

function setPrerenderIOMetaTag(status) {
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'prerender-status-code');
    meta.setAttribute('content', status);
    document.getElementsByTagName('head')[0].appendChild(meta);
}
//we need this to be available in the Angular config phase
//since Angular does not allow access to services in the config
//phase, we need to access it as non angular service for now
cc.deviceService = new cc.DeviceService(window);
//shortHand
cc.isTabletSize = cc.deviceService.isTabletSize();

// this is an empty dummy package. It can be overwritten by simply
// pasting customer specific code through the admin UI
angular.module('CouchCommerceApp.plugins', []);

// Declare app level module which depends on filters, and services
angular.module('CouchCommerceApp', [
    'ngSanitize',
    'ngAnimate',
    'ui.router',
    'sdk.decorators.$rootScope',
    'sdk.services.couchService',
    'sdk.services.navigationService',
    'sdk.services.basketService',
    'sdk.services.wishlistService',
    'sdk.services.couponService',
    'sdk.services.pagesService',
    'sdk.services.deviceService',
    'sdk.services.checkoutService',
    'sdk.services.userService',
    'sdk.services.configService',
    'sdk.services.searchService',
    'sdk.services.injectsService',
    'sdk.services.trackingService',
    'sdk.services.requestAnimationFrame',
    'sdk.services.stateResolverService',
    'sdk.services.imageResizeService',
    'sdk.directives',
    'sdk.filter',
    'ui.bootstrap',
    'pasvaz.bindonce',
    'templates',
    'snap',
    'chayns',
    'CouchCommerceApp.plugins'
])
.config(function ($stateProvider, $locationProvider, $urlRouterProvider, screenIndexes, snapRemoteProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');

    // let's keep this in for easier debugging of hashbang URL issues
    // $provide.decorator('$sniffer', function ($delegate) {
    //     $delegate.history = false;
    //     return $delegate;
    // });

    snapRemoteProvider.globalOptions.addBodyClasses = true;
    snapRemoteProvider.globalOptions.hyperextensible = false;

    var UNIQUE_URL_PREFIX = '29ad37d2-78e3-428d-9ff4-057acdff42b8/';

    var categoryStateConfig = {
        url: '/',
        templateUrl: cc.isTabletSize ? 'categories/cc-category-grid.tpl.html' : 'categories/cc-category-list.tpl.html',
        controller: 'CategoryController',
        screenIndex: screenIndexes.category,
        resolve: {
            category: ['couchService', '$stateParams', 'navigationService', '$q', '$state', function (couchService, $stateParams, navigationService, $q, $state) {

                return couchService
                        .getCategory($stateParams.category)
                        .then(function (category) {
                            //we need to make that check here *before* the CategoryController
                            //is intialized. Otherwise we will have double transitions in such
                            //cases.
                            if (category && !category.children) {
                                // the serverside states API does not differentiate between `category` and `products` state. It
                                // always returns `category` states. It's currently easier for us to just redirect on the clientside
                                $state.transitionTo('products', { category: category.urlId }, { location: false });
                                return $q.reject();
                            }
                            return category;
                        });
            }]
        },
        onEnter: ['metaService', 'category', function (metaService, category) {
            if (category.isRoot) {
                metaService.reset();
            } else {
                metaService.set({
                    description: ''
                });
            }
        }]
    };

    $stateProvider
        .state('categoryempty', categoryStateConfig)
        .state('categories', angular.extend({}, categoryStateConfig, { url: UNIQUE_URL_PREFIX + ':category' }))

        .state('products', {
            url: UNIQUE_URL_PREFIX + ':category',
            templateUrl: 'products/cc-product-grid.tpl.html',
            controller: 'ProductsController',
            resolve: {
                products: ['couchService', '$stateParams', function (couchService, $stateParams) {
                    return couchService.getProducts($stateParams.category);
                }],
                category: ['couchService', '$stateParams', function (couchService, $stateParams) {
                    return couchService.getCategory($stateParams.category);
                }]
            },
            onEnter: ['metaService', function (metaService) {
                metaService.set({
                    description: ''
                });
            }],
            screenIndex: screenIndexes.products
        })

        .state('product', {
            url: UNIQUE_URL_PREFIX + ':category:productUrlKey',
            templateUrl: cc.isTabletSize ? 'product/cc-product-wide.tpl.html' : 'product/cc-product.tpl.html',
            controller: 'ProductController',
            resolve: {
                product: ['couchService', '$stateParams', function (couchService, $stateParams) {
                    return couchService.getProduct($stateParams.category, $stateParams.productUrlKey);
                }],
                category: ['couchService', '$stateParams', function (couchService, $stateParams) {
                    return couchService.getCategory($stateParams.category);
                }]
            },
            onEnter: ['product', 'metaService', function (product, metaService) {
                if (product) {
                    metaService.set({
                        description: product.description
                    });
                }
            }],
            screenIndex: screenIndexes.product
        })

        .state('oldCategories', angular.extend({}, categoryStateConfig, {
            url: '/cat/:category',
            resolve: {
                category: ['couchService', '$stateParams', '$state', function (couchService, $stateParams) {
                    return couchService.getCategory($stateParams.category);
                }]
            },
            controller: ['$location', 'category', function ($location, category) {
                setPrerenderIOMetaTag('301');
                $location.path(category.getOriginFullUrl());
            }]
        }))

        .state('oldProducts', {
            url: '/cat/:category/products',
            templateUrl: 'products/cc-product-grid.tpl.html',
            controller: ['category', '$location', function (category, $location) {
                setPrerenderIOMetaTag('301');
                $location.path(category.getOriginFullUrl());
            }],
            resolve: {
                category: ['couchService', '$stateParams', function (couchService, $stateParams) {
                    return couchService.getCategory($stateParams.category);
                }]
            }
        })

        .state('oldProduct', {
            url: '/cat/:category/product/:productUrlKey',
            templateUrl: cc.isTabletSize ? 'product/cc-product-wide.tpl.html' : 'product/cc-product.tpl.html',
            controller: ['product', '$location', function (product, $location) {
                setPrerenderIOMetaTag('301');
                $location.path(product.getOriginFullUrl());
            }],
            resolve: {
                product: ['couchService', '$stateParams', function (couchService, $stateParams) {
                    return couchService.getProduct($stateParams.category, $stateParams.productUrlKey);
                }]
            }
        })

        // would really love to keep this so that we can trigger the cart opening via
        // URL. Unfortunately I haven't found a way to keep the /cart URL just as a way
        // to open the right side menu without changing the currently active state.
        // This example does not seem to apply to our case: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#wiki-how-to-open-a-dialogmodal-at-a-certain-state
        // .state('.cart', {
        //     url: '/cart',
        //     onEnter: ['$snapRemote', function ($snapRemote) {
        //         $snapRemote.open('right');
        //     }]
        // });

        .state('checkout', {
            url: '/checkout',
            templateUrl: 'checkout/cc-checkout.tpl.html',
            controller: 'CheckoutController',
            onEnter: ['metaService', function (metaService) {
                metaService.set({
                    description: ''
                });
            }],
            screenIndex: screenIndexes.checkout
        })

        .state('summary', {
            url: '/summary/:token',
            templateUrl: 'summary/cc-summary.tpl.html',
            controller: 'SummaryController',
            onEnter: ['metaService', function (metaService) {
                metaService.set({
                    description: ''
                });
            }],
            screenIndex: screenIndexes.summary
        });

    var thankyouStateConfig = {
        templateUrl: 'thankyou/cc-thankyou.tpl.html',
        controller: 'ThankyouController',
        screenIndex: screenIndexes.thankyou,
        resolve: {
            summaryResponse: ['checkoutService', function (checkoutService) {
                return checkoutService.getLastSummary();
            }]
        },
        onEnter: ['metaService', function (metaService) {
            metaService.set({
                description: ''
            });
        }]
    };

    $stateProvider
        .state('thankyou', thankyouStateConfig)

        .state('thankyouWithToken', angular.extend({}, thankyouStateConfig, {
            url: '/thankyou/:token',
            resolve: {
                summaryResponse: ['checkoutService', '$stateParams', function (checkoutService, $stateParams) {
                    return checkoutService.getSummary($stateParams.token);
                }]
            },
            onEnter: ['metaService', function (metaService) {
                metaService.set({
                    description: ''
                });
            }]
        }))

        .state('pages', {
            url: '/pages/:pageId',
            templateUrl: 'pages/cc-pages.tpl.html',
            controller: 'PagesController',
            screenIndex: screenIndexes.pages,
            onEnter: ['metaService', function (metaService) {
                metaService.set({
                    description: ''
                });
            }]
        });


    $urlRouterProvider.otherwise(function ($injector, $location) {
        var stateResolverService = $injector.get('stateResolverService');
        var navigationService = $injector.get('navigationService');
        var $state = $injector.get('$state');

        stateResolverService
            .resolveState($location.path())
            .then(function (state) {
                $state.transitionTo(state.stateName, state.stateParams, { location: false });
            }, function () {
                // since we're generating HTML snapshots for search engines
                // via prerender.io, we have to add this meta tag when the
                // requested url actually returns a 404 error
                // https://prerender.io/getting-started#404s
                setPrerenderIOMetaTag('404');
                navigationService.navigateToRootCategory();
            });
    });
})
.run(['couchService', 'stateResolverService', function (couchService, stateResolverService) {
    couchService.on('categoryCreated', function (origin, category) {

        if (category.hasChildren) {
            stateResolverService.registerState({
                url: category.getOriginFullUrl(),
                stateName: 'categories',
                stateParams: {
                    category: category.urlId
                }
            });
        }
        else {
            stateResolverService.registerState({
                url: category.getOriginFullUrl(),
                stateName: 'products',
                stateParams: {
                    category: category.urlId
                }
            });
        }
    });

    couchService.on('productCreated', function (origin, product) {
        stateResolverService.registerState({
            url: product.getOriginFullUrl(),
            stateName: 'product',
            stateParams: {
                category: product.categoryUrlId,
                productUrlKey: product.urlKey
            }
        });
    });
}])
//just to kick off the services
.run(['stateChangeService', 'viewClassService', 'backStepHighlightService', 'metaService', function () { } ])
.run(['$rootScope', '$timeout', '$window', 'slideDirectionService', 'deviceService', 'templateService', function ($rootScope, $timeout, $window, slideDirectionService, deviceService, templateService) {


    //Todo: Check what can be moved over to the MainController
    //Most things can, but things like language keys, when used from within
    //an isolated scope, directly turn to the $rootScope (as isolated scopes
    //don't inherit from a parent scope). We can fix this by providing a
    //languageService similar to the configService and then use this for such
    //cases.
    $rootScope.ln = cc.Lang;
    $rootScope.cfg = cc.Config;
    $rootScope.slideDirectionService = slideDirectionService;
    $rootScope.tpl = templateService;

    $rootScope.isTabletSize = cc.isTabletSize;

    //no need to add bindings for things that are unlikely to change over a session;
    deviceService.flagOs();
    deviceService.flagOverflowSupport();
    deviceService.flagModernFlexboxSupport();
    deviceService.flagIpadOnIos7();

    if (deviceService.isIpadOnIos7()) {
        deviceService.setViewportHeightToDeviceHeight();
    }

    $window.addEventListener('orientationchange', function () {
        $rootScope.$apply();
        if (deviceService.isIpadOnIos7()) {
            deviceService.setViewportHeightToDeviceHeight();
        }
    }, false);

}])
.run(['$rootScope', 'snapRemote', function ($rootScope, snapRemote) {
    $rootScope.$on('$stateChangeStart', function () {
        snapRemote.close();
    });
}])
.run(['deviceService', 'ccImageFullScreenService', 'ccImageZoomSettings', function (deviceService, ccImageFullScreenService, ccImageZoomSettings) {

    //by default, we enable the real zoom. We just disable it for low budget devices
    ccImageZoomSettings.enabled = true;
    ccImageFullScreenService.enabled = false;

    if (deviceService.isStockAndroidBrowser() || !deviceService.hasOverflowSupport()) {
        ccImageFullScreenService.enabled = true;
        ccImageZoomSettings.enabled = false;
    }
}])
.run(function () {
    sofa.Util.domReady(function () {
        FastClick.attach(document.body);
    });
})
.run(['titleService', function (titleService) {
    titleService.setShopNameTitle();
}])
// Animate on specific elements only
.config(['$animateProvider', function ($animateProvider) {
    $animateProvider.classNameFilter(/cc-animate/);
}])
// Prevent animation on first page load
.run(['$animate', '$rootScope', function ($animate, $rootScope) {
    $animate.enabled(false);
    // viewContentLoaded fires twice on page load
    var i = 0;

    var off = $rootScope.$on('$viewContentLoaded', function () {
        if (i > 1) {
            $animate.enabled(true);
            off();
        }
        i += 1;
    });
}])
.run(['trackingService', 'configService', function (trackingService, configService) {
    trackingService.addTracker(new cc.tracking.GoogleAnalyticsTracker({
        accountNumber: configService.get('googleAnalytics'),
        domainName: configService.get('googleAnalyticsSetDomain'),
        conversionId: configService.get('googleConversionId'),
        conversionLabel: configService.get('googleConversionLabel')
    }));

    if (configService.get('bingSiteId')) {
        trackingService.addTracker(new cc.tracking.BingTracker({
            siteId: configService.get('bingSiteId'),
            domainId: configService.get('bingDomainId'),
            actionId: configService.get('bingActionId')
        }));
    }
}]);
/*
.run(['dialog', '$timeout', 'storageService', function (dialog, $timeout, storageService) {

    if (!storageService.get('has-shown-welcome-modal')) {
        storageService.set('has-shown-welcome-modal', true);
        dialog.messageBox(null, null, [
            {
                result: 'ok',
                label: cc.Lang.btnOk
            }
        ]).opened
        .then(function () {
            $timeout(function () {
                var modal = document.getElementsByClassName('modal');
                angular.element(modal).children()[0].remove();
                angular.element(angular.element(modal).children()[0])
                .html('<iframe class="cc-modal-iframe" src="http://sofa.couchcommerce.com/"></iframe>');
            }, 0);
        });
    }
}]);
*/
