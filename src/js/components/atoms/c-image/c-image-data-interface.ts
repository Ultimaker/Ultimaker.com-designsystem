export interface CImageDataInterface {
    imageError: boolean;
    imageLoaded: boolean;
    intersected: boolean;
    placeholderImages: {
        gray: string;
        transparent: string;
    };
    src: string;
}
