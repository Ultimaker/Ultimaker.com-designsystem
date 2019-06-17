import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

const availableDecorators = {
    withKnobs,
};

export default (providedOptions) => {
    const defaultOptions = {
        data: {},
        decorators: [],
        getStory: type => type,
        kind: '',
        notes: {},
        knobs: {},
    };

    const options = {
        ...defaultOptions,
        ...providedOptions,
    };

    const stories = storiesOf(options.kind, module);

    options.decorators.forEach(
        decorator => stories.addDecorator(availableDecorators[decorator]),
    );

    Object.keys(options.data).forEach(
        type => stories.add(
            type,
            options.getStory(type),
            {
                ...options.notes,
                knobs: options.knobs,
            },
        ),
    );
};
