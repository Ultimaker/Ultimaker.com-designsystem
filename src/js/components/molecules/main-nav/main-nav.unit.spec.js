// /* eslint-disable max-nested-callbacks */
// import {build} from 'vuenit';
// import MainNav from './main-nav';
// import Defaults from 'constants/defaults';
// import ViewportUtil from 'utils/viewport';

// describe('components', () => {
//     describe('molecules', () => {
//         describe('main-nav', () => {
//             const fixture = require('./main-nav.unit.spec.json'),
//                 mount = build(MainNav, {props: fixture});

//             it('should detect the mobile device type', () => {
//                 const viewportUtil = new ViewportUtil(),
//                     vm = mount();

//                 spyOnProperty(viewportUtil, 'screenWidth', 'get').and.returnValue(Defaults.breakpoints.tablet);
//                 expect(Object.keys(vm.classList)).toContain('main-nav--small');

//                 vm.$destroy();
//             });

//             it('should detect the desktop device type', () => {
//                 const viewportUtil = new ViewportUtil(),
//                     vm = mount();

//                 spyOnProperty(viewportUtil, 'screenWidth', 'get').and.returnValue(Defaults.breakpoints.desktop);
//                 expect(Object.keys(vm.classList)).toContain('main-nav--large');

//                 vm.$destroy();
//             });
//         });
//     });
// });
