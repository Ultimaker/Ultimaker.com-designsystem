import { Vue, Component, Prop } from 'vue-property-decorator';
import { ITab } from './tab-models';

@Component({
    name: 'tab',
    template: require('./tab.html'),
})

export default class Tab extends Vue implements ITab {
    @Prop({ type: String, required: true })
    public id!:string;
    @Prop({ type: String, required: true })
    public title!:string;

    private visible:boolean = true;

    setVisible(val):void {
        this.visible = val;
    }
}
