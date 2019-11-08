import { data as header } from 'components/organisms/page-header/data/page-header.data';
import addStories from 'src/stories/helpers/add-stories';
import { data } from './data/preferences-bar.data';

const getStory = () => () => {
    return {
        props: {
            header: { default: header.default },
        },
        template: require('./preferences-bar.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'templates/preferences-bar',
    knobs: { escapeHTML: false },
});
