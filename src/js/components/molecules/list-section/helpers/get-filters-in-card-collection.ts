/** @format */

import { CardArticle } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardArticle';
import { Label } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/label/Label';

export function getFiltersInCardCollection(cards: CardArticle[]): string[] {
    return cards
        .filter((card: CardArticle) => card.labels)
        .reduce((acc: string[], card: CardArticle) => {
            // @ts-ignore
            card.labels.forEach((label: Label) => {
                if (!acc.includes(label.label)) {
                    acc.push(label.label);
                }
            });

            return acc;
        }, []);
}
