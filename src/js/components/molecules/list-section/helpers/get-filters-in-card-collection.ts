/** @format */

import { CardArticle } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardArticle';

export function getFiltersInCardCollection(cards: CardArticle[]): string[] {
    return cards
        .filter((card: CardArticle) => card.labels)
        .reduce((acc: string[], card: CardArticle) => {
            // @ts-ignore
            card.labels.forEach((label) => {
                if (!acc.includes(label)) {
                    acc.push(label);
                }
            });

            return acc;
        }, []);
}
