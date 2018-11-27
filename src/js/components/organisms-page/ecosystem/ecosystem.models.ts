export interface IItem {
    icon: object;
    title: string;
    description: string;
    contentLink: object;
}

export interface IEcosystem {
    title: string;
    items: IItem[];
    videoId?: string;
}
