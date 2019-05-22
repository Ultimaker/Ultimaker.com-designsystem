export default {
    consentLevel: 0b0011,
    suggestedConsentLevel: 0b1111,
    consentLevels: {
        functional: 0b0001,
        analytics: 0b0010,
        personalization: 0b0100,
        tracking: 0b1000,
        minimal: 0b0011,
        all: 0b1111,
    },
    country: {
        name: 'United States of America',
        code: 'US',
        currency: {
            code: 'USD',
            symbol: '$',
        },
    },
    language: 'en',
    breakpoints: {
        mobile: {
            min: 0,
            max: 568,
        },
        mobileXl: {
            min: 569,
            max: 767,
        },
        tablet: {
            min: 768,
            max: 1024,
        },
        desktop: {
            min: 1025,
            max: 1200,
        },
        desktopHd: {
            min: 1201,
            max: Infinity,
        },
    },
    buildingUnit: 12,
    defaultDuration: 0.3,
    defaultEase: '.23, 1, .32, 1',
};
