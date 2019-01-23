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

export enum FocusArea {
    center = '', // default, no need to specify
    top = 'top',
    right = 'right',
    bottom = 'bottom',
    left = 'left',
    topRight = 'top_right',
    topLeft = 'top_left',
    bottomRight = 'bottom_right',
    bottomLeft = 'bottom_left',
    faceLargest = 'face',
    faces = 'faces',
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
