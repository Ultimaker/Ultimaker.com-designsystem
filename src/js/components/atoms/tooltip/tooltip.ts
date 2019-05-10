import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'Tooltip',
    template: require('./tooltip.vue.html'),
})

export default class Tooltip extends Vue {
    @Prop({ type: String, required: false }) block?: string;

    classObject() {
        const classes = {};

        if (this.block !== '') {
            classes[`${ this.block }__tooltip`] = true;
        }

        return classes;
    }
}
