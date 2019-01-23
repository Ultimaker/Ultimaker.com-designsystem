import { ITags } from '../tag-list/tag-list.models';
import { IImage } from '../../atoms/responsive-picture/responsive-picture.models';
import { IIcon } from '../../atoms/icon/icon.models';

export interface ICard {
    title: string;
    description?: string;
    image?: IImage;
    contentLink?: {};
    tags?: ITags;
    icon?: IIcon;
}

export interface ICardProps {
    block?: string;
    card: ICard;
}
