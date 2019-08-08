/** @format */

import { SearchBarPageProps } from 'components/molecules/search-bar-page/search-bar-page.models';
import { SearchResultProps } from '../../molecules/search-result/search-result.models';

export interface SearchResultsProps {
    eventLoadMore: string;
    eventSubmitSearch: string;
    isLoading: boolean;
    label: SearchBarPageProps['label'];
    placeholder: SearchBarPageProps['placeholder'];
    searchResults: SearchResultProps[];
    showLoadMore: boolean;
    terms: SearchResultProps['terms'];
}
