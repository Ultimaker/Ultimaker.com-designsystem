/** @format */
import { Search } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/search/Search';

export interface SearchBarPageProps extends Search {
    eventSubmitSearch: string;
    isLoading: boolean;
    searchFieldName?: string;
    terms: string;
}
