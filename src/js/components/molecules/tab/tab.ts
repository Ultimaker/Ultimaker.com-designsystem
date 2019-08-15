import { Vue, Component, Prop } from 'vue-property-decorator';

import { TabProps } from './tab.models';
import WithRender from './tab.vue.html';
@WithRender
@Component({
    name: 'Tab',
})

export class Tab extends Vue implements TabProps {
    @Prop({ type: String, required: true }) public id!:TabProps['id'];
    @Prop({ type: String, required: true }) label!: TabProps['label'];
    @Prop({ type: Object, required: true }) content!: TabProps['content'];
    @Prop({ type: Boolean, required: true }) active!: TabProps['active'];
}
