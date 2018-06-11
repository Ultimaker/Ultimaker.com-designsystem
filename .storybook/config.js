import {configure, addDecorator} from '@storybook/vue';
import {setOptions} from '@storybook/addon-options';
import {withNotes} from '@storybook/addon-notes';
import Vue from 'vue';
import Vuex from 'vuex';
import 'src/js';
import 'components/generic/faux-router-link/faux-router-link'

setOptions({
    hierarchyRootSeparator: /\|/,
    hierarchySeparator: /\//,
    showSearchBox: false,
    sortStoriesByKind: false
});

addDecorator(withNotes);

Vue.use(Vuex);

function loadStories() {
    const globals = require.context('../src/global', true, /\.stories\.js$/);
    const atoms = require.context('../src/js', true, /\.stories\.js$/);

    require('src/welcome.stories');
    globals.keys().forEach(filename => globals(filename));
    atoms.keys().forEach(filename => atoms(filename));
}

configure(loadStories, module);
