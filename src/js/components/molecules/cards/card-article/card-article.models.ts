/** @format */

import { CardBaseProps } from 'components/molecules/cards/card-base/card-base.models';
import { CardArticle } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardArticle';

export interface CardArticleProps extends CardBaseProps {
    description?: CardArticle['description'];
    url?: CardArticle['url'];
}
