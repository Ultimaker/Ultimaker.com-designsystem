import ViewportUtil from 'utils/viewport';
import { ComboBoxItem } from './combo-box-item.interface';

export interface ComboBoxDataInterface {
    comboBoxHeight: null | number;
    initiated: boolean;
    input: string;
    inputHeight: null | string;
    inputPlaceholder: string;
    isReversed: boolean;
    listBoxElement: null | HTMLElement;
    listBoxHeight: null | number;
    listBoxItemHeight: null | number;
    listBoxStyles: object;
    maxMultiplier: number;
    removeObserverWhenInView: boolean;
    selectedItem: null | ComboBoxItem;
    selectedIndex: number;
    showListBox: boolean;
    viewportUtil: ViewportUtil;
}
