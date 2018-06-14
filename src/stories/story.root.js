import Vue from 'vue';
import data from './data/data.json';

export default Vue.component('story-root', {
    name: 'story-root',
    provide: {
        data
    },
    template: '<section class="story"><slot /></section>'
});
