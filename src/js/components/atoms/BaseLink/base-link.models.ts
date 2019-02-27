import { ContentLink } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/cta/ContentLink';

export interface IBaseLink extends ContentLink {
    block?: string;
    mod?: string;
}
