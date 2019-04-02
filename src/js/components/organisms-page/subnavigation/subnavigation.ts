import { Component, Prop } from 'vue-property-decorator';
import OverflowContainer from '../../organisms/overflow-container';
import { SubNavigation as SubnavigationInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/sub-navigation/SubNavigation';

@Component({
    name: 'Subnavigation',
})

export default class Subnavigation extends OverflowContainer implements SubnavigationInterface {
    @Prop({ type: Array, required: true }) items!: SubnavigationInterface['items'];
}
