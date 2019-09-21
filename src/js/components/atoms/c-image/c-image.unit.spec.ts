import 'babel-polyfill';
import { build } from 'vuenit';
import CImage from './c-image';
import ViewportUtil from 'utils/viewport';
import { FocusArea } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/media/Image';
import { ResizeBehavior } from 'components/atoms/c-image/c-image.models';

describe('components', (): void => {
    describe('atoms', (): void => {
        describe('c-image', (): void => {
            let viewportUtil;
            const desiredWidth = 300;
            const desiredHeight = 200;
            const mount = build(CImage, { props: {
                url: '/media/images/does/not/exist',
                alt: 'Non existant image',
                mimeType: '',
                quality: 65,
                radius: 0,
                imageFormat: 'png',
                resizeBehavior: 'fill',
                focusArea: 'center',
                backgroundColor: null,
            } });

            beforeEach((): void => {
                viewportUtil = new ViewportUtil();
                spyOnProperty(window, 'devicePixelRatio', 'get').and.returnValue(1);
            });

            it('should request a cropped image when a resize-behavior is specified', (): void => {
                const vm = mount({
                    props: {
                        resizeBehavior: ResizeBehavior.crop,
                        focusArea: FocusArea.bottomRight,
                    },
                });
                const requestUrl = vm.getParams({ width: desiredWidth, height: desiredHeight });
                expect(requestUrl).toContain(`w=${desiredWidth}`);
                expect(requestUrl).toContain(`h=${desiredHeight}`);
                expect(requestUrl).toContain(`fit=${ResizeBehavior.crop}`);
                expect(requestUrl).toContain(`f=${FocusArea.bottomRight}`);
                vm.$destroy();
            });
        });
    });
});
