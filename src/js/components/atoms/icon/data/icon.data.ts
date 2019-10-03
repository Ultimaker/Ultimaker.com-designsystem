/** @format */
import { iconGroups } from './icon-groups';

export const data = Object.keys(iconGroups)
    .reduce(
        (acc: string[], iconGroup: string): string[] => {
            iconGroups[iconGroup].forEach(
                (iconName): number => acc.push(iconName),
            );

            return acc;
        },
        [],
    )
    .sort()
    .reduce(
        (acc: {}, iconName: string): {} => {
            acc[iconName] = { iconName };
            return acc;
        },
        {},
    );
