import { Vue } from 'vue-property-decorator';

export interface ITab extends Vue {
    title: string;
    setVisible(state:boolean):void;
}
