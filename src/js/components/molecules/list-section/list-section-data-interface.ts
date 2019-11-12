import ViewportUtility from 'utils/viewport';
import { CardArticle } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardArticle';
import { ValueFilter } from 'utils/filters/ValueFilter';

export interface ListSectionDataInterface {
    chunkIndex: number;
    chunks: CardArticle[];
    chunkSize: number;
    expanded: boolean;
    showMax: number;
    valueFilter: ValueFilter;
    viewportUtil: ViewportUtility;
    visibleChunks: number;
    visibleTooltip: boolean;
}
