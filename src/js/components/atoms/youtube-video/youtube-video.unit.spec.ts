import YoutubeVideo from './youtube-video';
import { build } from 'vuenit';

describe('components', () => {
    describe('atoms', () => {
        describe('youtube-video', () => {
            const mount = build(YoutubeVideo, {
                props: {
                    videoId: '5SoZiTxdQyw',
                },
            });

            it('should render a youtube-video', () => {
                const vm = mount().$mount();

                expect(vm.videoVisible).toBeFalsy();
                vm.$destroy();
            });

            it('should contain a link to the youtube video itself', () => {
                const vm = mount().$mount();

                expect(vm.videoUrl).toContain(vm.videoId);
            });
        });
    });
});
