// import {text} from '@storybook/addon-knobs';
import data from './page-header.stories.data';

export default () => ({
    ... data,
    // minorNav: {
    //     ... data.minorNav,
    //     children: data.minorNav.children.map((item, i) => ({
    //         ... item,
    //         title: text(`Footer - category ${i+1} title`, item.title),
    //         children: item.children.map((child, x) =>({
    //             ... child,
    //             title: text(`Footer - Links category ${item.title.toLowerCase()} link ${x+1}`, child.title)
    //         }))
    //     }))
    // },
    // globalLabels: {
    //     countryInputPlaceholder: text(`Footer - countryInputPlaceholder`, data.globalLabels.countryInputPlaceholder),
    //     countryDetected: text(`Footer - countryDetected`, data.globalLabels.countryDetected),
    //     countrySuggestions: text(`Footer - countrySuggestions`, data.globalLabels.countrySuggestions),
    //     copyright: text(`Footer -  copyright`, data.globalLabels.copyright)
    // },
    // legalNav: {
    //     children: data.legalNav.children.map((leg, i)  => ({
    //         title: text(`Footer - legal title ${i+1}`, leg.title)
    //     }))
    // },
    // country: data.country
});
