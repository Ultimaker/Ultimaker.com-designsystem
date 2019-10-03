/** @format */
interface IconGroups {
    [key: string]: string[];
}

// keeping this array because it’s the designer’s original distinction of the icon types
// can be flattened if there’s agreement that the distinction is no longer needed
export const iconGroups: IconGroups = {
    brandIcons: [
        'logo-ultimaker',
        'robot-ultimaker',
        'ultimaker-u',
    ],
    productIcons: [
        '3d-kit',
        'connect',
        'cura',
        'dual-extrusion',
        'material',
        'resolution',
        'service',
        'single-extrusion',
        'support',
        'um2',
        'um2ext',
        'um3',
        'um3ext',
        'ums5',
        'volume',
    ],
    functionalIcons: [
        'account',
        'angle-down',
        'angle-left',
        'angle-right',
        'angle-up',
        'arrow-down',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'chat',
        'checkmark',
        'close',
        'cloud',
        'download',
        'edit',
        'file',
        'fullscreen',
        'geo',
        'hexagon',
        'hexagon-fill',
        'info',
        'like',
        'location',
        'mail',
        'menu',
        'mobile',
        'more',
        'notify',
        'play-video',
        'plus',
        'rate',
        'rate-solid',
        'refresh',
        'search',
        'settings',
        'show',
        'store',
        'typing',
        'upload',
    ],
    socialIcons: [
        'facebook',
        'instagram',
        'linkedin',
        'twitter',
        'youtube',
    ],
};
