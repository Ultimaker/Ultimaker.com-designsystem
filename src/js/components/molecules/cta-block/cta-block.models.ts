import { CtaBlock } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cta/CtaBlock';

export interface CtaBlockProps extends CtaBlock {
    mod?: string | undefined;
    styleContentButton?: string;
    styleContentLink?: string | undefined;
    modContentLink?: string | undefined;
    modContentButton?: string | undefined;
}
