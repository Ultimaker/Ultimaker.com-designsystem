import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/card-download.data';
import { CardDownload } from './card-download';

describe('components', () => {
    describe('molecules', () => {
        describe('card-download', () => {
            const mount = build(CardDownload, { props: {} });

            it('should render an CardDownload component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`card-download ${key} props`, () => {
                const props = data[key];
                const mount = build(CardDownload, { props });

                it(`should render an CardDownload component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
