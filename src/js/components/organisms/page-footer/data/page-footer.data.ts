export const data = {
    default: {
        navigation: [{
            type: 'FooterNavigationCategory',
            label: 'Item one',
            items: [{
                type: 'NavigationItem',
                label: 'Label item one',
                url: 'http://example.com',
            }],
        },{
            type: 'FooterNavigationCategory',
            label: 'Item two',
            items: [{
                type: 'NavigationItem',
                label: 'Label item one',
                url: 'http://example.com',
            }],
        },{
            type: 'FooterNavigationCategory',
            label: 'Item three',
            items: [{
                type: 'NavigationItem',
                label: 'Label item one',
                url: 'http://example.com',
            }],
        }],
        localeSelector: {
            type: 'CountryAutoCompleteField',
            label: 'Type country code or name',
            placeholder: 'Type your country',
            highlightedLabel: 'Detected',
            suggestionsLabel: 'Suggestions',
            datasource: {
                type: 'Map',
                AF: 'Afghanistan',
                AL: 'Albania',
                DZ: 'Algeria',
                AS: 'American Samoa',
                AD: 'Andorra',
                AO: 'Angola',
                AI: 'Anguilla'
            },
        },
        legalNavigation:{
            type: 'LegalNavigationCategory',
            label: 'Item one',
            items: [{
                type: 'NavigationItem',
                label: 'Label item one',
                url: 'http://example.com',
            }],
        }
    }
}
