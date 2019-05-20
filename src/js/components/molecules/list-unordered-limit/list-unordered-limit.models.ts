import { Limit as LimitIterface } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/limit/Limit';
import { ContentButton as ContentButtonInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/cta/ContentButton';

export interface ListUnorderedLimitProps extends LimitIterface {
    expand?: ContentButtonInterface;
    limit?: LimitIterface;
}
