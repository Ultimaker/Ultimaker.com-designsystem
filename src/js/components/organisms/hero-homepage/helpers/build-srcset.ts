const SCREEN_WIDTHS: number[] = [640, 750, 828, 1125, 1242];

export const buildSrcSet = ({
    url,
    webP = false,
}: {
    url: string;
    webP?: boolean;
}): string => SCREEN_WIDTHS.map(
    (width: number) => `${url}?w=${width}${webP ? '&fm=webp' : ''} ${width}w`,
).join(', ');
