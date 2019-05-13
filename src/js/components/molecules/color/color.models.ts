import { ProductColor as ProductColorInterface  } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/products/ProductColor';

export interface ColorProps {
    rgbHex: ProductColorInterface['rgbHex'];
    transparency: ProductColorInterface['transparency'];
}
