import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import data from './resellers.stories.json';

storiesOf('organisms|resellers', module)
    .addDecorator(withKnobs)
    .add(
        'Resellers',
        () => {
            const title = text('Title', data.title),
                preferredResellers = text('Preferred', data.labels.preferredResellers),
                authorizedResellers = text('Authorized', data.labels.authorizedResellers),
                preferredResellersInfoLabel = text('More info', data.labels.preferredResellersInfoLabel),
                preferredResellersInfoText = text('Tooltip', data.labels.preferredResellersInfoText),
                resellers = object('Resellers', data.resellers),
                singleShowroomLabel = text('Labels (single)', data.labels.singleShowroomLabel),
                multiShowroomLabel = text('Labels (multiple)', data.labels.multiShowroomLabel),
                visitWebsite = text('Call to actions', data.labels.visitWebsite),
                showAll = text('Button', data.labels.showAll);

            return {
                data: () => ({
                    resellers: {
                        title,
                        resellers,
                        labels: {
                            showAll: showAll,
                            visitWebsite: visitWebsite,
                            preferredResellers: preferredResellers,
                            preferredResellersInfoLabel: preferredResellersInfoLabel,
                            preferredResellersInfoText: preferredResellersInfoText,
                            authorizedResellers: authorizedResellers,
                            multiShowroomLabel: multiShowroomLabel,
                            singleShowroomLabel: singleShowroomLabel
                        }
                    }
                }),
                template: require('./resellers.stories.html')
            };
        },
        {
            notes: {markdown: require('./resellers.stories.md')}
        }
    );
