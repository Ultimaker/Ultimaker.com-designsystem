import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'ListShowAll',
    template: require('./template.html'),
})

export default class ListShowAll extends Vue {
    @Prop({ type: Object, required: true }) list!: object;
    @Prop({ type: Number }) limit?: number;
    @Prop({ type: String }) label?: string;

    showAllItems: boolean = false;

    show(evt): void {
        this.showAllItems = true;
    }

    showCount(): string {
        // return this.list.listItems.items.length;
        return `${this.label} 10`;
    }
}
