import { Vue, Component } from 'vue-property-decorator';
import { ListUnorderedLimitProps } from './list-unordered-limit.models';
import WithRender from './list-unordered-limit.vue.html';

@WithRender
@Component({
    name: 'ListUnorderedLimit',
})

export class ListUnorderedLimit extends Vue implements ListUnorderedLimitProps {}
