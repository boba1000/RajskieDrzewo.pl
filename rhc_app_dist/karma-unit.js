module.exports = function ( karma ) {
    karma.set({
        /**
         * From where to look for files, starting with the location of this file.
         */
        basePath: '../',

        /**
         * This is the list of file patterns to load into the browser during testing.
         */
        files: [
            'vendor/angular-unstable/angular.js',
            'vendor/angular-unstable/angular-animate.js',
            'vendor/angular-unstable/angular-sanitize.js',
            'node_modules/angular-bindonce/bindonce.js',
            'vendor/ui-router/angular-ui-router.js',
            'vendor/ui-modal/ui-bootstrap-modal-tpls-0.6.0.js',
            'vendor/snap/snap.js',
            'vendor/snap/angular-snap.js',
            'node_modules/sofa-core/dist/sofa.core.js',
            'node_modules/sofa-storages/dist/sofa.storages.js',
            'node_modules/sofa-logging-service/dist/sofa.loggingService.js',
            'node_modules/sofa-device-service/dist/sofa.deviceService.js',
            'node_modules/sofa-url-parser-service/dist/sofa.urlParserService.js',
            'node_modules/sofa-url-construction-service/dist/sofa.urlConstructionService.js',
            'node_modules/sofa-search-service/dist/sofa.searchService.js',
            'node_modules/sofa-tracking/dist/sofa.tracking.js',
            'node_modules/sofa-user-service/dist/sofa.userService.js',
            'node_modules/sofa-basket-service/dist/sofa.basketService.js',
            'node_modules/sofa-wishlist-service/dist/sofa.wishlistService.js',
            'node_modules/sofa-image-resizer-service/dist/sofa.imageResizerService.js',
            'node_modules/sofa-pages-service/dist/sofa.pagesService.js',
            'node_modules/sofa-checkout-service/dist/sofa.checkoutService.js',
            'node_modules/sofa-couch-service/dist/sofa.couchService.js',
            'node_modules/sofa-coupon-service/dist/sofa.couponService.js',
            'node_modules/sofa-state-resolver-service/dist/sofa.stateResolverService.js',
            'node_modules/sofa-base/src/core/fastclick.js',
            'node_modules/sofa-base/src/core/rAF.polyfill.js',
            'node_modules/sofa-base/src/decorators/$rootScope.js',
            'node_modules/sofa-base/src/directives/ccAddress/ccAddress.js',
            'node_modules/sofa-base/src/directives/ccBreadcrumbs/ccBreadcrumbs.js',
            'node_modules/sofa-base/src/directives/ccCategoryTreeView/_declarations.js',
            'node_modules/sofa-base/src/directives/ccCategoryTreeView/ccCategoryTreeView.js',
            'node_modules/sofa-base/src/directives/ccCategoryTreeView/ccCategoryTreeViewRemote.js',
            'node_modules/sofa-base/src/directives/ccCategoryTreeView/ccNestedCategoryItem.js',
            'node_modules/sofa-base/src/directives/ccCheckBox/ccCheckBox.js',
            'node_modules/sofa-base/src/directives/ccElasticViews/_declarations.js',
            'node_modules/sofa-base/src/directives/ccElasticViews/demos/app.js',
            'node_modules/sofa-base/src/directives/ccElasticViews/domPosLeft.js',
            'node_modules/sofa-base/src/directives/ccElasticViews/dragInfoService.js',
            'node_modules/sofa-base/src/directives/ccElasticViews/elasticModel.js',
            'node_modules/sofa-base/src/directives/ccElasticViews/elasticViewConfig.js',
            'node_modules/sofa-base/src/directives/ccElasticViews/elasticViewControllerFactory.js',
            'node_modules/sofa-base/src/directives/ccElasticViews/elasticViewDirective.js',
            'node_modules/sofa-base/src/directives/ccElasticViews/hammer.js',
            'node_modules/sofa-base/src/directives/ccElasticViews/viewCollectionFactory.js',
            'node_modules/sofa-base/src/directives/ccFixedToolbarsView/ccFixedToolbarsView.js',
            'node_modules/sofa-base/src/directives/ccFooterLinks/ccFooterLinks.js',
            'node_modules/sofa-base/src/directives/ccGoBackButton/ccGoBackButton.js',
            'node_modules/sofa-base/src/directives/ccGoUpButton/ccGoUpButton.js',
            'node_modules/sofa-base/src/directives/ccGoUpControl/ccGoUpControl.js',
            'node_modules/sofa-base/src/directives/ccImageFullScreen/_declarations.js',
            'node_modules/sofa-base/src/directives/ccImageFullScreen/ccImageFullScreen.js',
            'node_modules/sofa-base/src/directives/ccImageFullScreen/ccImageFullScreenService.js',
            'node_modules/sofa-base/src/directives/ccImageZoom/_declarations.js',
            'node_modules/sofa-base/src/directives/ccImageZoom/ccImageZoom.js',
            'node_modules/sofa-base/src/directives/ccImageZoom/ccImageZoomDomActors.js',
            'node_modules/sofa-base/src/directives/ccImageZoom/ccImageZoomDomUtil.js',
            'node_modules/sofa-base/src/directives/ccImageZoom/ccImageZoomLerpAnim.js',
            'node_modules/sofa-base/src/directives/ccImageZoom/ccImageZoomMaskService.js',
            'node_modules/sofa-base/src/directives/ccImageZoom/ccImageZoomSettings.js',
            'node_modules/sofa-base/src/directives/ccInclude/ccInclude.js',
            'node_modules/sofa-base/src/directives/ccInject/ccInject.js',
            'node_modules/sofa-base/src/directives/ccIosInputFocusFix/_declarations.js',
            'node_modules/sofa-base/src/directives/ccIosInputFocusFix/ccIosInputFocusFix.js',
            'node_modules/sofa-base/src/directives/ccIosInputFocusFix/inputFocusFixConfigService.js',
            'node_modules/sofa-base/src/directives/ccLazyValidation/ccLazyValidation.js',
            'node_modules/sofa-base/src/directives/ccLoadingSpinner/ccLoadingSpinner.js',
            'node_modules/sofa-base/src/directives/ccPrice/ccPrice.js',
            'node_modules/sofa-base/src/directives/ccScrollFix/ccScrollFix.js',
            'node_modules/sofa-base/src/directives/ccScrollingShadow/ccScrollingShadow.js',
            'node_modules/sofa-base/src/directives/ccSearchField/ccSearchField.js',
            'node_modules/sofa-base/src/directives/ccSelectBox/ccSelectBox.js',
            'node_modules/sofa-base/src/directives/ccTemplateCode/ccTemplateCode.js',
            'node_modules/sofa-base/src/directives/ccThumbnailBar/ccThumbnailBar.js',
            'node_modules/sofa-base/src/directives/ccVariantSelector/ccVariantSelector.js',
            'node_modules/sofa-base/src/directives/ccZippy/ccZippy.js',
            'node_modules/sofa-base/src/directives/directives.js',
            'node_modules/sofa-base/src/directives/sofaName/sofaNameDirective.js',
            'node_modules/sofa-base/src/directives/sofaRadioButton/sofaRadioButtonDirective.js',
            'node_modules/sofa-base/src/filter/currency/currencyFilter.js',
            'node_modules/sofa-base/src/filter/filter.js',
            'node_modules/sofa-base/src/services/BasketService.js',
            'node_modules/sofa-base/src/services/CheckoutService.js',
            'node_modules/sofa-base/src/services/ConfigService.js',
            'node_modules/sofa-base/src/services/CouchService.js',
            'node_modules/sofa-base/src/services/CouponService.js',
            'node_modules/sofa-base/src/services/DeviceService.js',
            'node_modules/sofa-base/src/services/ImageResizeService.js',
            'node_modules/sofa-base/src/services/InjectsService.js',
            'node_modules/sofa-base/src/services/LoggingService.js',
            'node_modules/sofa-base/src/services/MemoryStorageService.js',
            'node_modules/sofa-base/src/services/NavigationService.js',
            'node_modules/sofa-base/src/services/PagesService.js',
            'node_modules/sofa-base/src/services/RequestAnimationFrame.js',
            'node_modules/sofa-base/src/services/SearchService.js',
            'node_modules/sofa-base/src/services/SessionStorageService.js',
            'node_modules/sofa-base/src/services/StateResolverService.js',
            'node_modules/sofa-base/src/services/TrackingService.js',
            'node_modules/sofa-base/src/services/UrlConstructionService.js',
            'node_modules/sofa-base/src/services/UrlParserService.js',
            'node_modules/sofa-base/src/services/UserService.js',
            'node_modules/sofa-base/src/services/WishlistService.js',
            'node_modules/sofa-base/src/services/chayns.js',
            'node_modules/sofa-base/dist/cc.angular.templates.js',
            'build/data/local/cc.config.js',
            'build/data/local/cc.lang.js',
            'build/templates/templates.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/app/app.unit.spec.js',
            'src/app/cart/cart.unit.spec.js',
            ,
            'src/app/**/*.js'
        ],
        exclude: [
            'assets/**/*.js',
            'src/app/**/*.e2e.spec.js'
        ],
        frameworks: ['jasmine'],
        plugins: [
            'karma-jasmine',
            'karma-firefox-launcher',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-coffee-preprocessor'
        ],
        preprocessors: {},

        /**
         * How to report, by default.
         */
        reporters: 'dots',

        /**
         * On which port should the browser connect, on which port is the test runner
         * operating, and what is the URL path for the browser to use.
         */
        port: 9018,
        runnerPort: 9101,
        urlRoot: '/',

        /**
         * Disable file watching by default.
         */
        autoWatch: false,

        /**
         * The list of browsers to launch to test on. This includes only "Firefox" by
         * default, but other browser names include:
         * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
         *
         * Note that you can also use the executable name of the browser, like "chromium"
         * or "firefox", but that these vary based on your operating system.
         *
         * You may also leave this blank and manually navigate your browser to
         * http://localhost:9018/ when you're running tests. The window/tab can be left
         * open and the tests will automatically occur there during the build. This has
         * the aesthetic advantage of not launching a browser every time you save.
         */
        browsers: [
            'Chrome'
        ]
    });
};
