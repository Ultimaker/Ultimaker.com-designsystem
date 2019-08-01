/** @format */

import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './search-bar-page.vue.html';

import { SearchBarPageProps } from './search-bar-page.models';

@WithRender
@Component({
    name: 'SearchBarPage',
})
export class SearchBarPage extends Vue implements SearchBarPageProps {
    @Prop({ type: String, required: true }) eventSubmitSearch!: SearchBarPageProps['eventSubmitSearch'];
    @Prop({ type: Boolean, required: true }) isLoading!: SearchBarPageProps['isLoading'];
    @Prop({ type: String, required: true }) label!: SearchBarPageProps['label'];
    @Prop({ type: String, required: true }) placeholder!: SearchBarPageProps['placeholder'];
    @Prop({ type: String, default: 'search' }) searchFieldName?: SearchBarPageProps['searchFieldName'];
    @Prop({ type: String, required: true }) terms!: SearchBarPageProps['terms'];

    q: string = '';

    handleSubmit() {
        if (!this.q.length || this.q === this.terms) {
            return;
        }

        this.$emit(this.eventSubmitSearch, this.q);
    }

    mounted() {
        this.q = this.terms;
    }
}
