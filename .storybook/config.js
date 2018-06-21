import {configure, addDecorator} from '@storybook/vue';
import {setOptions} from '@storybook/addon-options';
import {withNotes} from '@storybook/addon-notes';
import Vue from 'vue';
import Vuex from 'vuex';
import 'src/js';
import 'src/scss/storybook.scss';
import 'components/generic/faux-router-link/faux-router-link';
import storyRoot from 'src/stories/story.root.js';

setOptions({
    hierarchyRootSeparator: /\|/,
    hierarchySeparator: /\//,
    showSearchBox: false,
    sortStoriesByKind: false
});

addDecorator(withNotes);

console.log(storyRoot);

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
    `
}));

Vue.use(Vuex);

function loadStories() {
    const globals = require.context('../src/stories/global', true, /\.stories\.js$/),
        atoms = require.context('../src/stories/atoms', true, /\.stories\.js$/),
        molecules = require.context('../src/stories/molecules', true, /\.stories\.js$/),
        organisms = require.context('../src/stories/organisms', true, /\.stories\.js$/);
        templates = require.context('../src/stories/templates', true, /\.stories\.js$/);

    require('src/stories/welcome.stories');
    globals.keys().forEach(filename => globals(filename));
    atoms.keys().forEach(filename => atoms(filename));
    molecules.keys().forEach(filename => molecules(filename));
    organisms.keys().forEach(filename => organisms(filename));
    templates.keys().forEach(filename => templates(filename));
}

configure(loadStories, module);
