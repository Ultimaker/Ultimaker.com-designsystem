/** @format */
import { Tab } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/tab/Tab';

export interface TabsProps {
    tabs: Tab[];
    defaultTab: number;
    sequenced: boolean;
}
