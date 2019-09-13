import { buttonCountrySelector } from 'components/organisms/locale-selector/data/examples/button-country-selector';
import { buttonLanguageSelector } from 'components/organisms/locale-selector/data/examples/button-language-selector';

export const languageAndCountry = {
    language: 'nl',
    country: {
        name: 'Afghanistan',
        code: 'AF',
    },
    eventCountryChanged: 'event-country-changed',
    eventLanguageChanged: 'event-language-changed',
    copyrightLabel: '2011- 2999 Ultimaker bv.',
    countryCode: 'GB',
    countrySelector: buttonCountrySelector,
    languageCode: 'en',
    navigation: [
        {
            type: 'FooterNavigationCategory',
            label: 'Products',
            items: [
                {
                    type: 'NavigationItem',
                    label: '3D printers',
                    url: 'http://example.com',
                },
                {
                    type: 'NavigationItem',
                    label: 'Software',
                    url: 'http://example.com',
                },
                {
                    type: 'NavigationItem',
                    label: 'Materials',
                    url: 'http://example.com',
                },
            ],
        },
        {
            type: 'FooterNavigationCategory',
            label: 'Solution areas',
            items: [
                {
                    type: 'NavigationItem',
                    label: 'Product design',
                    url: 'http://example.com',
                },
                {
                    type: 'NavigationItem',
                    label: 'Manufactguring aids',
                    url: 'http://example.com',
                },
                {
                    type: 'NavigationItem',
                    label: 'End-use parts',
                    url: 'http://example.com',
                },
                {
                    type: 'NavigationItem',
                    label: 'Architecture',
                    url: 'http://example.com',
                },
                {
                    type: 'NavigationItem',
                    label: 'Education',
                    url: 'http://example.com',
                },
            ],
        },
        {
            type: 'FooterNavigationCategory',
            label: 'Company',
            items: [
                {
                    type: 'NavigationItem',
                    label: 'About us',
                    url: 'http://example.com',
                },
                {
                    type: 'NavigationItem',
                    label: 'Careers',
                    url: 'http://example.com',
                },
                {
                    type: 'NavigationItem',
                    label: 'Press',
                    url: 'http://example.com',
                },
                {
                    type: 'NavigationItem',
                    label: 'Contact us',
                    url: 'http://example.com',
                },
                {
                    type: 'NavigationItem',
                    label: 'Find resellers',
                    url: 'http://example.com',
                },
                {
                    type: 'NavigationItem',
                    label: 'Join community',
                    url: 'http://example.com',
                },
                {
                    type: 'NavigationItem',
                    label: 'Visit events',
                    url: 'http://example.com',
                },
                {
                    type: 'NavigationItem',
                    label: 'Subscribe to newsletter',
                    url: 'http://example.com',
                },
            ],
        },
    ],
    legalNavigation: [
        {
            type: 'NavigationItem',
            label: 'Terms of use',
            url: 'http://example.com',
        },
        {
            type: 'NavigationItem',
            label: 'Privacy and Cookie Policy',
            url: 'http://example.com',
        },
    ],
    localeSelector: buttonLanguageSelector,
};
