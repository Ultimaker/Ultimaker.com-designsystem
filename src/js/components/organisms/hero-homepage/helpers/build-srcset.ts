const LANDSCAPE_SCREEN_WIDTHS: number[] = [1280, 1920, 2048, 2880];
const PORTRAIT_SCREEN_WIDTHS: number[] = [750, 1125, 1536];

export const buildSrcSet = ({
    url,
    focusArea = '',
    webp = false,
    portrait = false,
}: {
    url: string;
    focusArea?: string;
    webp?: boolean;
    portrait?: boolean;
}): string => (portrait ? PORTRAIT_SCREEN_WIDTHS : LANDSCAPE_SCREEN_WIDTHS)
    .map((width: number): string => {
        const height = Math.ceil(portrait ? width / 9 * 16 : width / 16 * 9);

        return `${url}?w=${width}&h=${height}&fit=fill&f=${focusArea}${webp ? '&fm=webp' : ''} ${width}w`;
    }).join(', ');
