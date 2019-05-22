import { select, text } from '@storybook/addon-knobs';
import data from './ecosystem.stories.json';
import { iconList } from '../../helpers/icons';

export default () => ({
    ecosystem: {
        title: text('Ecosystem - title', data.title),
        items: data.items.map((item, i) => ({
            icon: {
                iconName: select(`Ecosystem - item ${i + 1} icon`, iconList, item.icon.iconName),
            },
            title: text(`Ecosystem - item ${i + 1} title`, item.title),
            description: text(`Ecosystem - item ${i + 1} description`, item.description),
            contentLink: {
                text: text(`Ecosystem - item ${i + 1} content link`, item.contentLink.text),
            },
        })),
    },
});
