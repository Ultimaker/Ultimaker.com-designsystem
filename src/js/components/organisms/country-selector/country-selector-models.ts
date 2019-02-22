import { CountryAutoCompleteField } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/fields/CountryAutoCompleteField';

export interface CountrySelectorInterface {
    label: CountryAutoCompleteField['label'];
    placeholder: CountryAutoCompleteField['placeholder'];
    highlightedLabel: CountryAutoCompleteField['highlightedLabel'];
    suggestionsLabel: CountryAutoCompleteField['suggestionsLabel'];
    datasource: CountryAutoCompleteField['datasource'];
    country: any;
}
