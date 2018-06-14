import Vue from 'vue';

const data = require('./data/data.json'),
    listitems = require('./data/listitems.json');

export default Vue.component('story-root', {
    name: 'story-root',
    provide: {
        data,
        listitems
    },
    template: '<section class="story"><slot /></section>'
});
