/** @format */

import { CardArticle } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cards/CardArticle';
import { FilterCategoryInterface } from 'components/molecules/filter-category/filter-category.interface';
import { Label } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/label/Label';
import { getActiveFiltersForCategory } from './get-active-filters-for-category';

function getFilteredCardsFromCategory(
    cards: CardArticle[],
    activeCategory: FilterCategoryInterface,
    filters: string[],
): CardArticle[] {
    return cards
        .filter((card: CardArticle) => card.labels)
        .reduce((acc: CardArticle[], card: CardArticle) => {
            // @ts-ignore
            if (card.labels.some((label: Label) => filters.includes(label.label))) {
                acc.push(card);
            }

            return acc;
        }, []);
}

export function getFilteredCardsFromActiveFilterCategories(
    cards: CardArticle[],
    activeFilterCategories: FilterCategoryInterface[],
): CardArticle[] {
    let allCards: CardArticle[] = [];
    let filters: string[] = [];
    let activeFilters: string[] = [];

    activeFilterCategories.forEach((activeCategory) => {
        if (allCards.length === 0) {
            filters = getActiveFiltersForCategory(activeCategory);
            allCards = getFilteredCardsFromCategory(cards, activeCategory, filters);
        } else {
            activeFilters = getActiveFiltersForCategory(activeCategory);
            allCards = getFilteredCardsFromCategory(allCards, activeCategory, activeFilters);
        }
    });

    return allCards.filter((card, index) => allCards.indexOf(card) === index);
}
