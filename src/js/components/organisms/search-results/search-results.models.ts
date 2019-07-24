/** @format */

import { SearchResultProps } from '../../molecules/search-result/search-result.models';

export interface SearchResultsProps {
    eventName: string;
    isLoading: boolean;
    searchResults: SearchResultProps[];
    showLoadMore: boolean;
}
