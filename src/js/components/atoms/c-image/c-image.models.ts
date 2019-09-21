import { Image } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/media/Image';

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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CImageInterface extends Image {}
