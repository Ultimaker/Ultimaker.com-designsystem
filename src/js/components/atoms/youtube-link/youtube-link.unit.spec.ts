/* eslint-disable max-nested-callbacks */
import { YoutubeLink } from './youtube-link';
import { build } from 'vuenit';

describe('components', () => {
    describe('atoms', () => {
        describe('youtube-link', () => {
            const mount = build(YoutubeLink, {
                props: {
                    videoId: '5SoZiTxdQyw',
                },
            });

            it('should render a youtube-link and display a modal', () => {
                const vm = mount().$mount();

                expect(vm.videoVisible).toBeFalsy();
                vm.toggleVideoVisible();
                expect(vm.videoVisible).toBeTruthy();
                vm.$destroy();
            });

            it('should contain a link to the youtube video itself', () => {
                const vm = mount().$mount();

                expect(vm.youtubeUrl).toContain(vm.youtubeId);
            });
        });
    });
});
