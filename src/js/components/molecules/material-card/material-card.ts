import { Vue, Component, Prop } from 'vue-property-decorator';

import { IMaterialCardProps, IMaterialCard } from './material-card.models';

@Component({
    name: 'material-card',
    template: require('./material-card.html'),
})

export default class MaterialCard extends Vue implements IMaterialCardProps{
    @Prop({ type: Object, required: true, default: {} })
        card!: IMaterialCard;
}
