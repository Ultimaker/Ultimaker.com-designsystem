/** @format */

import { LabelFilterInterface } from 'components/atoms/label-filter/label-filter.interface';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import WithRender from './label-filter.vue.html';

import { LabelFilterProps } from './label-filter.models';

@WithRender
@Component({
    name: 'LabelFilter',
})
export class LabelFilter extends Vue implements LabelFilterProps {
    @Prop({ type: Boolean, default: false }) checked?: LabelFilterProps['checked'];
    @Prop({ type: Boolean, default: false }) disabled?: LabelFilterProps['disabled'];
    @Prop({ type: String, required: true }) eventChange!: LabelFilterProps['eventChange'];
    @Prop({ type: String, required: true }) label!: LabelFilterProps['label'];
    @Prop({ type: String, required: true }) name!: LabelFilterProps['name'];
    @Prop({ type: String, required: true }) value!: LabelFilterProps['value'];

    checkedState: boolean = this.checked || false;

    emitEvent(eventName) {
        this.$emit(eventName, {
            checked: this.checkedState,
            disabled: this.disabled,
            value: this.value,
        });
    }

    onChange($event) {
        this.emitEvent(this.eventChange);
    }
}
