import { PageFooter } from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/page-footer/PageFooter';

export interface PageFooterProps extends PageFooter {
    countryCode: string;
    eventCountryChanged: string;
    eventLanguageChanged: string;
    languageCode: string;
}
