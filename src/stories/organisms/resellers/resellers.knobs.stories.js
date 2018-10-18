import {text, boolean, number} from '@storybook/addon-knobs';
import data from './resellers.stories.json';
import {responsiveImage} from '../../helpers/images';

export default () => ({
    resellers: {
        title: text('Reseller - Preferred resellers title', data.title),
        tooltip: text('Reseller - tooltip', data.tooltip),
        labels: {
            preferredResellers: text('Reseller - Preferred', data.labels.preferredResellers),
            authorizedResellers: text('Reseller - Authorized', data.labels.authorizedResellers),
            preferredResellersInfoLabel: text('Reseller - More info', data.labels.preferredResellersInfoLabel),
            preferredResellersInfoText: text('Reseller - Tooltip', data.labels.preferredResellersInfoText),
            showroom: text('Reseller - Labels (single)', data.labels.showroom),
            showroomPlural: text('Reseller - Labels (multiple)', data.labels.showroomPlural),
            visitWebsite: text('Reseller - Call to actions', data.labels.visitWebsite),
            showAll: text('Reseller - Button', data.labels.showAll)
        },
        resellers: data.resellers.map((reseller, i) => ({
            name: text(`Reseller - reseller ${i+1} name`, reseller.name),
            preferred: boolean(`Reseller - reseller ${i+1} preferred`, reseller.preferred),
            showroomCount: number(`Reseller - reseller ${i+1} showrooms`, reseller.showroomCount),
            href: text(`Reseller - reseller ${i+1} link`, reseller.href),
            image: responsiveImage(`Reseller - image ${i+1}`, reseller.image)
        }))
    }
});
