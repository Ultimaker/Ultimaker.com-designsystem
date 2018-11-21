import { ICard } from '../../molecules/card/card.models';

interface IMaterial extends ICard {}

export interface IMaterials extends Array<IMaterial> {}

export interface IMaterialTranslations {
    showAll: string;
}

export interface IMaterialProps {
    title: string;
    materials: IMaterials;
    labels: IMaterialTranslations;
}
