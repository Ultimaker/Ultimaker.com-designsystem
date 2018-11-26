import {text} from '@storybook/addon-knobs';
import data from './materials.stories.json';
import {responsiveImage} from '../../helpers/images';

export default () => ({
    materials: {
        title: text('Material - title', data.title),
        labels: {
            showAll: text('Material - Show button', data.labels.showAll)
        },
        materials: data.materials.map((material, i) => ({
            image: responsiveImage(`Material card - image ${i+1}`, material.image),
            title: text(`Material card - Title ${i+1}`, material.title),
            tags: material.tags.map((tag, index) => {
                return {
                    title: text(`Material card - tag ${i+1}-${index+1}`, tag.title)
                };
            })
        }))
    }
});

