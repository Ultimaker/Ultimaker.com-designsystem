import {configure, addDecorator} from '@storybook/vue';
import {setOptions} from '@storybook/addon-options';
import {withNotes} from '@storybook/addon-notes';
import Vue from 'vue';
import Vuex from 'vuex';

setOptions({
    hierarchyRootSeparator: /\|/,
});

addDecorator(withNotes);

Vue.use(Vuex);

function loadStories() {
    require('../src/js/components/generic/faux-router-link/faux-router-link');
    require('../src/js');

    const req = require.context('../src', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
