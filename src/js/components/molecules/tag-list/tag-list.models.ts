import { ITag } from '../tag/tag.models';

export interface ITags extends Array<ITag> {}

export interface ITaglist {
    tags: ITags;
}

export interface ITaglistProps extends ITaglist{}
