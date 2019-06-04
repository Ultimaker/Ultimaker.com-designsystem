import { CardDownload } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardDownload';

interface SetSelectedItem {
    (index): void;
}

export interface CardDownloadProps extends CardDownload {
    name: string;
    selected: boolean;
    index: number;
    setSelectedItem: SetSelectedItem;
}
