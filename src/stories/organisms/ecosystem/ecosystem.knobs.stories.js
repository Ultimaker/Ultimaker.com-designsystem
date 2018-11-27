import {select, text} from '@storybook/addon-knobs';
import data from './ecosystem.stories.json';
import {icons} from '../../data/data.json';

export default () => ({
    ecosystem: {
        title: text('Ecosystem - title',  data.title),
        items: data.items.map((item, i) => ({
            icon: {
                iconName: select(`Ecosystem - item ${i+1} icon`, icons.productIcons, item.icon.iconName)
            },
            title: text(`Ecosystem - item ${i+1} title`, item.title),
            description: text(`Ecosystem - item ${i+1} description`, item.description),
            contentLink: {
                text: text(`Card - link text ${i+1}`, item.contentLink.text),
                href: text(`Card - link href ${i+1}`, item.contentLink.href)
            }
        })),
        videoId: text('Ecosystem - youtube id',  data.videoId)
    }
});
