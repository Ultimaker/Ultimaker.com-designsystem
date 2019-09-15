import {configure, addDecorator, addParameters} from '@storybook/vue';
import {withNotes} from '@storybook/addon-notes';
import storyRouter from 'storybook-vue-router';

import Vue from 'vue';
import Vuex from 'vuex';
import 'babel-core/register';
import 'babel-polyfill';
import 'whatwg-fetch';

import {registry} from 'src/js';
import {PublicEventService} from 'src/js';
import 'src/scss/storybook.scss';
import storyRoot from 'src/stories/story.root.js';
import viewPort from "utils/viewport";
import { createStore } from './store';

if(process.env.BABEL_ENV === 'jest') {
    const registerRequireContextHook = require('babel-plugin-require-context-hook/register');
    registerRequireContextHook();
}

addParameters({
    options: {
        hierarchyRootSeparator: /\|/,
        hierarchySeparator: /\//,
        showSearchBox: false,
        sortStoriesByKind: false
    }
});

Vue.use(registry);
Vue.use(PublicEventService);
Vue.use(Vuex);

window.$u = {
    events: PublicEventService
};

addDecorator(withNotes);
addDecorator(storyRouter());

addDecorator((story) => ({
    components: {
        wrappedStory: story(),
        storyRoot: storyRoot
    },
    store: createStore(),
    template: `
        <story-root>
            <wrapped-story />
            <portal-target name="modals"></portal-target>
        </story-root>
    `,
    data: () => ({
        viewPort: new viewPort()
    }),
    mounted() {
        // This is a workaround to handle the creation of the storybook, the viewport doesn't have the proper dimensions
        // when the iframe is just created. But there is no event to connect to to be notified when the viewport is OK.
        Vue.nextTick().then(() => {
            setTimeout(() => {
                this.viewPort.triggerResize();
            }, 500);
        });
    }
}));

function loadStories() {
    const atoms = require.context('../src/stories/atoms', true, /\.stories\.[jt]s$/);
    const components = require.context('../src/js/components', true, /\.stories\.[jt]s$/);
    const globals = require.context('../src/stories/global', true, /\.stories\.[jt]s$/);
    const molecules = require.context('../src/stories/molecules', true, /\.stories\.[jt]s$/);
    const templates = require.context('../src/stories/templates', true, /\.stories\.[jt]s$/);

    require('../src/stories/welcome.stories');

    atoms.keys().forEach(filename => atoms(filename));
    components.keys().forEach(filename => components(filename));
    globals.keys().forEach(filename => globals(filename));
    molecules.keys().forEach(filename => molecules(filename));
    templates.keys().forEach(filename => templates(filename));
}

configure(loadStories, module);
