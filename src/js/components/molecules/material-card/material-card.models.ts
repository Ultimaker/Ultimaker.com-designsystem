import { ITags } from '../tag-list/tag-list.models';
import { IImage } from '../../atoms/responsive-picture/responsive-picture.models';
import { IIcon } from '../../atoms/icon/icon.models';
import { IContentLink } from '../../atoms/content-link/content-link.models';

export interface IMaterialCard {
    title: string;
    description?: string;
    image?: IImage;
    contentLink?: IContentLink;
    tags?: ITags;
    icon?: IIcon;
}

export interface IMaterialCardProps {
    block?: string;
    card: IMaterialCard;
}
