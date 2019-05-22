import { icons } from '../data/data.json';

export const iconList = Object.keys(icons).reduce((acc, key) => {
    acc.push(...icons[key]);

    return acc;
}, []);
