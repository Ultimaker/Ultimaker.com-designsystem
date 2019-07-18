/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './label-filter.vue.html';

import { LabelFilterProps } from './label-filter.models';

@WithRender
@Component({
    name: 'LabelFilter',
})
export class LabelFilter extends Vue implements LabelFilterProps {
    @Prop({ type: String, required: true }) category!: LabelFilterProps['category'];
    @Prop({ type: Boolean, default: false }) checked?: LabelFilterProps['checked'];
    @Prop({ type: Boolean, default: false }) disabled?: LabelFilterProps['disabled'];
    @Prop({ type: String, required: true }) label!: LabelFilterProps['label'];
    @Prop({ type: String, required: true }) name!: LabelFilterProps['name'];
    @Prop({ type: String, required: true }) value!: LabelFilterProps['value'];

    /**
     * @type PublicEventService.emit
     */
    $emitPublic;

    get payload() {
        return {
            category: this.category,
            checked: this.checked,
            value: this.value,
        };
    }

    onChange($event) {
        const payload = {
            ...this.payload,
            checked: $event.target.checked,
        };

        this.$emitPublic(`checkboxChange-${this.category}`, payload);
    }
}
