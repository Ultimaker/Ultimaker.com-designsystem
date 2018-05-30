import {configure} from '@storybook/vue';
import {setOptions} from '@storybook/addon-options';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

setOptions({
    hierarchyRootSeparator: /\|/,
});

function loadStories() {
    require('../src/js');

    const req = require.context('../src', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
