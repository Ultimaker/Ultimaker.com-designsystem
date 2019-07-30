/** format */

import { CardArticle } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardArticle';

export function getFiltersInCardCollection(cards): string[] {
    return cards.reduce(
        (acc: string[], card) => {
            if (card.labels) {
                card.labels.forEach(
                    (label: string) => {
                        if (!acc.includes(label)) {
                            acc.push(label);
                        }
                    },
                );
            }

            return acc;
        },
        [],
    );
}
