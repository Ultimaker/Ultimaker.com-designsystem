export interface IHorizontalListItem {
    url: string;
    text: string;
    additionalContent: string;
}

export interface IHorizontalListProps {
    styleModifier: string;
    label: string;
    listItems: IHorizontalListItem[];
}
