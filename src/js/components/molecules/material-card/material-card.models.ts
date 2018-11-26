import { ITags } from '../tag-list/tag-list.models';
import { IImage } from '../../atoms/responsive-picture/responsive-picture.models';

export interface IMaterialCard {
    title: string;
    slug?: string;
    image?: IImage;
    tags?: ITags;
}

export interface IMaterialCardProps {
    card: IMaterialCard;
}
