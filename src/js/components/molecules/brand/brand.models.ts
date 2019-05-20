import { Brand as BrandInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/brand/Brand';

export interface BrandProps extends BrandInterface {
    image?: BrandInterface['image'];
}
