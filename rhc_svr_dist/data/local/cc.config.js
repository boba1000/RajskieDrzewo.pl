cc.Config = {
    loggingEnabled: true,
    useShopUrls: false,
    storeCode: '35444',
    storeName: 'RajskieDrzewo.pl',
    originalUrl:'http://www.RajskieDrzewo.pl/',
    noRedirectSuffix:'seller',
    searchUrl: 'http://rdsvr-hurtemgo.rhcloud.com/search',
    apiUrl: 'http://rdsvr-hurtemgo.rhcloud.com/products',
    checkoutUrl:'http://rdsvr-hurtemgo.rhcloud.com/checkout/',
    apiHttpMethod: 'jsonp',
    categoryJson: '/data/local/categories.json',
    //apiUrl: 'data/dasgibtesnureinmal/products.json',
    //apiHttpMethod: 'get',
    apiEndpoint: 'http://rdsvr-hurtemgo.rhcloud.com/',
    imageResizer: '',
    imageResizerEnabled: false,
    mediaFolder:'http://rdsvr-hurtemgo.rhcloud.com/media/cat/',
    mediaImgExtension:'jpg',
    mediaPlaceholder:'http://rdsvr-hurtemgo.rhcloud.com/media/platzhalter.jpg',
    resourceUrl:'/data/pages/',
    shippingCost:10,
    shippingTax:23,
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
                title:'Koszty i gwarancje',
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
    googleAnalytics:'UA-54717806-1',
    googleAnalyticsSetDomain:'rajskiedrzewo.pl',
    googleConversionId:'',
    googleConversionLabel:'',
    bingSiteId: '',
    bingDomainId: '',
    bingActionId: '',
    meta: {
        robots: 'noodp, noydir',
        description: 'RajskieDrzewo.pl jedz jabłka na zdrowie'
    }
};

