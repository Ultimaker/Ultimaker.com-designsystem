import {storiesOf} from '@storybook/vue';
import data from './reseller-card.stories.json';
import {withKnobs, text, files, number} from '@storybook/addon-knobs';


storiesOf('Molecules|layout/cards', module)
    .addDecorator(withKnobs)
    .add(
        'Reseller card',
        () => {
            const name = text('Name', data.card.name),
                fileInput = files('Images', ['image/png', 'image/svg+xml'], '/generator/svg/120/120'),
                showroomCount = number('Showrooms', data.card.showroomCount),
                singleShowroomLabel = text('Label (single)', data.card.labels.singleShowroomLabel),
                multiShowroomLabel = text('Label (multiple)', data.card.labels.multiShowroomLabel),
                visitWebsite = text('Call to action', data.card.labels.visitWebsite);

            return {
                data: () => ({
                    card: {
                        name,
                        fileInput,
                        showroomCount,
                        href: data.card.href,
                        image: {
                            mobileWidth: {
                                url: fileInput
                            }
                        },
                        labels: {
                            visitWebsite: visitWebsite,
                            multiShowroomLabel: multiShowroomLabel,
                            singleShowroomLabel: singleShowroomLabel
                        }
                    }
                }),
                template: require('./reseller-card.stories.html')
            };
        },
        {
            notes: {markdown: require('./reseller-card.stories.md')}
        }
    );
