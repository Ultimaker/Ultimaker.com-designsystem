interface IImageUrl {
    url: string;
}

interface IImageVariant {
    retina?: IImageUrl;
    url: string;
}

export interface IImage {
    desktopHdWidth?: IImageVariant;
    desktopWidth?: IImageVariant;
    tabletWidth?: IImageVariant;
    mobileXlWidth?: IImageVariant;
    mobileLWidth?: IImageVariant;
    mobileWidth?: IImageVariant;
}

export interface IImageProps extends IImage {}
