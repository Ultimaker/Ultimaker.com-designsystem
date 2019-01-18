export enum ImageFormat {
    jpg = 'jpg',
    pjpg = 'pjpg',
    png = 'png',
    png8 = 'png8',
    webp = 'webp',
}

export enum ResizeBehavior {
    pad = 'pad',
    fill = 'fill',
    scale = 'scale',
    crop = 'crop',
    thumb = 'thumb',
}

export enum FocusArea {
    center = 'center',
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

export interface IImageProps {
    imageSrc: string;
    description: string;
    quality: number;
    radius: number;
    imageFormat: ImageFormat;
    resizeBehavior: ResizeBehavior;
    focusArea: FocusArea;
    backgroundColor: string | null;
}
