import { FocusArea as FocusArea, Image } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/media/Image';
export { FocusArea } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/media/Image';

export enum ImageFormat {
    default = '',
    jpg = 'jpg',
    pjpg = 'pjpg',
    png = 'png',
    png8 = 'png8',
    webp = 'webp',
}

export enum ResizeBehavior {
    default = '',
    pad = 'pad',
    fill = 'fill',
    scale = 'scale',
    crop = 'crop',
    thumb = 'thumb',
}

export interface ICImageProps extends Image {
    keepInView: boolean;
    quality: number;
    radius: number;
    imageFormat: ImageFormat;
    resizeBehavior: ResizeBehavior;
    focusArea: FocusArea;
    backgroundColor: string | null;
}
