import { ITags } from 'components/molecules/tag-list/tag-list.models';
import { IImage } from 'components/atoms/responsive-picture/responsive-picture.models';
import { IIcon } from 'components/atoms/icon/icon.models';

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
