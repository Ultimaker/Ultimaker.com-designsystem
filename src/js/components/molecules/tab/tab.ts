import { Vue, Component, Prop } from 'vue-property-decorator';

import { Tab as TabInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/tab/Tab';

interface TabImplementationInterface extends TabInterface {
    id: any;
    active: boolean;
}

@Component({
    name: 'Tab',
    template: require('./tab.html'),
})

export default class Tab extends Vue implements TabImplementationInterface {
    @Prop({ type: String, required: true }) public id!:TabImplementationInterface['id'];
    @Prop({ type: String, required: true }) label!: TabImplementationInterface['label'];
    @Prop({ type: Object, required: true }) content!: TabImplementationInterface['content'];
    @Prop({ type: Boolean, required: true }) active!: TabImplementationInterface['active'];
}
