import {text, boolean, number} from '@storybook/addon-knobs';
import data from './resellers.stories.json';
import {responsiveImage} from '../../helpers/images';

export default () => ({
    resellers: {
        title: text('Reseller - title', data.title),
        resellers: data.resellers.map((reseller, i) => ({
            name: text(`Reseller - reseller ${i+1} name`, reseller.name),
            preferred: boolean(`Reseller - reseller ${i+1} preferred`, reseller.preferred),
            showroomCount: number(`Reseller - reseller ${i+1} showrooms`, reseller.showroomCount),
            href: text(`Reseller - reseller ${i+1} link`, reseller.href),
            image: responsiveImage(`Reseller - image ${i+1}`, reseller.image)
        })),
        labels: {
            preferredResellers: text('Preferred', data.labels.preferredResellers),
            authorizedResellers: text('Authorized', data.labels.authorizedResellers),
            preferredResellersInfoLabel: text('More info', data.labels.preferredResellersInfoLabel),
            preferredResellersInfoText: text('Tooltip', data.labels.preferredResellersInfoText),
            singleShowroomLabel: text('Labels (single)', data.labels.singleShowroomLabel),
            multiShowroomLabel: text('Labels (multiple)', data.labels.multiShowroomLabel),
            visitWebsite: text('Call to actions', data.labels.visitWebsite),
            showAll: text('Button', data.labels.showAll)
        }
    }
});
