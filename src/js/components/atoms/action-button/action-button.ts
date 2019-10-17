import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './action-button.vue.html';

@WithRender
@Component({
    name: 'ActionButton',
})

export class ActionButton extends Vue {
    @Prop({ type: String, required: false }) block?: string;
    @Prop({ type: String, required: false }) mod?: string;
    @Prop({ type: String, required: false }) icon?: string;
    @Prop({ type: String, required: false }) label?: string ;

    get classObject() {
        const classes = {};

        if (this.block !== '' && typeof this.block === 'string') {
            classes[`${this.block}__link`] = true;
        }
        if (this.mod !== '' && typeof this.mod === 'string') {
            this.mod.split(' ').forEach((mod) => {
                classes[`link--${mod}`] = true;
            });
        }
        if (this.icon !== '' && this.mod && this.mod.indexOf('small') === -1) {
            classes['link--icon'] = true;
        }

        return classes;
    }
}
