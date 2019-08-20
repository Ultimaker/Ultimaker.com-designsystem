import { AutoCompleteField } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/fields/AutoCompleteField';

export interface AutoCompleteItem {
    title: string;
    value: string;
}

export interface AutoCompleteProps extends AutoCompleteField {}
