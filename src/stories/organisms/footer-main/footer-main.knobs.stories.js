import {text} from '@storybook/addon-knobs';
import data from './footer-main.stories.json';

export default () => ({
    ... data,
    minorNav: {
        ... data.minorNav,
        children: data.minorNav.children.map((item, i) => ({
            ... item,
            title: text(`Category ${i+1} title`, item.title),
            children: item.children.map((child,x) =>({
                ... child,
                title: text(`Links - Category ${item.title} link ${x+1}`, child.title)
            }))
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
    },
    country: data.country
});
