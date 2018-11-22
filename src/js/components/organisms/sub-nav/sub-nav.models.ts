interface ISiblings {
    href: string;
    icon: string;
}

interface ILinks {
    siblings: ISiblings[];
}

interface IPage {
    links: ILinks;
}

export interface ISubNavProps extends IPage {}
