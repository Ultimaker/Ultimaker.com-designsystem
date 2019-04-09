import { build } from 'vuenit';
import Tab from './tab';

const props = {
    id: 'tab1',
    active: true,
    type: 'Tab',
    label: 'Label one',
    content: {
        type: 'ContentGeneral',
        title: 'Content general title 1',
        description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla.',
        image: {
            url: 'https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg',
            alt: 'An example image',
            quality: 65,
            radius: 0,
            imageFormat: 'png',
            resizeBehavior: 'fill',
            focusArea: 'center',
            backgroundColor: null,
            mimeType: 'png',
        },
        ctas: {
            type: 'CtaBlock',
            ctas: [
                {
                    type: 'ContentButton',
                    label: 'Call me back',
                    url: 'https://ultimaker.com',
                },
                {
                    type: 'ContentButton',
                    label: 'Call me back',
                    url: 'https://ultimaker.com',
                },
                {
                    type: 'ContentButton',
                    label: 'Call me back',
                    url: 'https://ultimaker.com',
                },
            ],
        },
        reversed: false,
    },
};

describe('components', () => {
    describe('molecules', () => {
        describe('tab', () => {
            const mount = build(Tab, {});

            it('should render a tab-component', () => {
                const vm = mount({ props });

                expect(vm).toBeDefined();
            });

            it('should be able to change the visibility', () => {
                const vm = mount({ props });

                expect(vm.id).toBe(props.id);
                expect(vm.$el.hasChildNodes()).toBeTruthy();
            });
        });
    });
});
