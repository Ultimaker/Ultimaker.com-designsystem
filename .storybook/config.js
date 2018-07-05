import {configure, addDecorator} from '@storybook/vue';
import {setOptions} from '@storybook/addon-options';
import {withNotes} from '@storybook/addon-notes';
import Vue from 'vue';
import Vuex from 'vuex';
import 'babel-core/register';
import 'babel-polyfill';

import {registry} from 'src/js';
import 'src/scss/storybook.scss';
import 'components/generic/faux-router-link/faux-router-link';
import storyRoot from 'src/stories/story.root.js';
import viewPort from "src/js/utils/viewport";

setOptions({
    hierarchyRootSeparator: /\|/,
    hierarchySeparator: /\//,
    showSearchBox: false,
    sortStoriesByKind: false
});

Vue.use(registry);

addDecorator(withNotes);

addDecorator((story) => ({
    components: {
        wrappedStory: story(),
        storyRoot: storyRoot
    },
    template: `
        <section class="story">
            <story-root>
                <wrapped-story />
            </story-root>
        </section>
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

Vue.use(Vuex);

function loadStories() {
    const globals = require.context('../src/stories/global', true, /\.stories\.js$/),
        atoms = require.context('../src/stories/atoms', true, /\.stories\.js$/),
        molecules = require.context('../src/stories/molecules', true, /\.stories\.js$/),
        organisms = require.context('../src/stories/organisms', true, /\.stories\.js$/),
        templates = require.context('../src/stories/templates', true, /\.stories\.js$/);

    require('src/stories/welcome.stories');
    globals.keys().forEach(filename => globals(filename));
    atoms.keys().forEach(filename => atoms(filename));
    molecules.keys().forEach(filename => molecules(filename));
    organisms.keys().forEach(filename => organisms(filename));
    templates.keys().forEach(filename => templates(filename));
}

configure(loadStories, module);
