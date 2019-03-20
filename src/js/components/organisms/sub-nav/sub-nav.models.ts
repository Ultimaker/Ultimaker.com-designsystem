interface ISiblings {
    href: string;
    icon: string;
}

interface ILinks {
    subNav: ISiblings[];
}

interface IPage {
    links: ILinks;
}

export interface ISubNavProps extends IPage {}
