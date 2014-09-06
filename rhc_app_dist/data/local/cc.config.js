cc.Config = {
    loggingEnabled: true,
    useShopUrls: false,
    storeCode: '35444',
    storeName: 'RajskeDrzewo.pl',
    originalUrl:'http://www.RajskeDrzewo.pl/',
    noRedirectSuffix:'desktop',
    searchUrl: 'http://rdsvr-hurtemgo.rhcloud.com/search',
    apiUrl: 'http://rdsvr-hurtemgo.rhcloud.com/products',
    checkoutUrl:'http://rdsvr-hurtemgo.rhcloud.com/checkout/',
    apiHttpMethod: 'jsonp',
    categoryJson: '/data/local/categories.json',
    //apiUrl: 'data/dasgibtesnureinmal/products.json',
    //apiHttpMethod: 'get',
    apiEndpoint: 'http://rdsvr-hurtemgo.rhcloud.com/',
    imageResizer: 'http://cdn1.couchcommerce.com/',
    imageResizerEnabled: false,
    mediaFolder:'http://rdsvr-hurtemgo.rhcloud.com/media/cat/',
    mediaImgExtension:'jpg',
    mediaPlaceholder:'http://rdsvr-hurtemgo.rhcloud.com/media/platzhalter.jpg',
    resourceUrl:'/data/pages/',
    shippingCost:0,
    shippingTax:0,
    shippingFreeFrom: null,
    currency:'PLN',
    currencySign:'PLN',
    showGeneralAgreement:1,
    showAgeAgreement:1,
    showAppExitLink:true,
    linkGeneralAgreement:'rules',
    linkRecallAgreement:'privacy',
    linkAgeAgreement:'age',
    linkShippingCosts:'costs',
    locale:'en-en',
    countries:[{"value":"PL","label":"Polska"}],
    aboutPages:[
            {
                title:'Regulamin serwisu',
                id:'rules'
            },
            {
                title:'Ochrona prywatności',
                id:'privacy'
            },
            {
                title:'Koszty i odpowiedzialność',
                id:'costs'
            }
    ],
    injects: [
        {
            url: '/',
            template: 'teaser',
            target: 'aboveContent' //aboveContent, aboveFooter, beneathFooter
        }
    ],
    extraBillingFields: [], // 'merchantnote', 'pickuptimeatstore', 'streetextra'
    showSearch: true,
    enablePromotionCodes: false,
    trustedShopsEnabled: true,
    trustedShopsId: '123',
    gitHubRepoUrl: 'https://github.com/sviete/RajskieDrzewo.pl',
    showPayPalButton: false,
    showCheckoutButton: true,
    googleAnalytics:'UA-42659602-1',
    googleAnalyticsSetDomain:'couchdemoshop.couchcommerce.com',
    googleConversionId:1072140179,
    googleConversionLabel:'r8ogCLjfZBCTn57_Aw',
    bingSiteId: '',
    bingDomainId: '',
    bingActionId: '',
    meta: {
        robots: 'noodp, noydir',
        description: 'RajskeDrzewo.pl jedz jabłka na zdrowie'
    }
};

