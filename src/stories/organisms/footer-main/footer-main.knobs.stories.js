import {text, object} from '@storybook/addon-knobs';
import data from './footer-main.stories.json';

export default () => ({
    ... data,
    minorNav: {
        children: data.minorNav.children.map((item, i) => ({
            title: text(`Category ${i+1} title`, item.title),
            children: object(`Links for Category ${i+1}`, item.children.map(index => ({
                title: index.title
            })))
        }))
    },
    globalLabels: {
        countryInputPlaceholder: text(`CountryInputPlaceholder`, data.globalLabels.countryInputPlaceholder),
        countryDetected: text(`CountryDetected`, data.globalLabels.countryDetected),
        countrySuggestions: text(`CountrySuggestions`, data.globalLabels.countrySuggestions),
        copyright: text(`Copyright`, data.globalLabels.copyright)
    },
    legalNav: {
        children: data.legalNav.children.map((leg, i)  => ({
            title: text(`Legal title ${i+1}`, leg.title)
        }))
    }
});
