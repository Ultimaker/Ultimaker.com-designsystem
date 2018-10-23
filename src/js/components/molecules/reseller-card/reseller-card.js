export default {
    name: 'reseller-card',
    template: require('./reseller-card.html'),
    props: {
        image: {
            type: Object
        },
        name: {
            type: String,
            required: true
        },
        showroomCount: {
            type: Number
        },
        preferred: {
            type: Boolean,
            default: false
        },
        href: {
            type: String,
            required: true
        },
        labels: {
            type: Object,
            required: true
        },
        position: {
            type: Number,
            default: -1
        }
    },
    methods: {
        getShowroomLabel(amount) {
            return amount > 1 ? this.labels.showroomPlural : this.labels.showroom;
        }
    },
    computed: {
        gtmEventInfo()  {
            return {
                dataType: 'reseller',
                data: {
                    name: this.name,
                    fullPath: this.$route ? this.$route.fullPath : '',
                    hasLogo: !!this.image,
                    isPreferred: this.preferred,
                    position: this.position,
                    amountShowrooms: this.showroomCount,
                    outboundUrl: this.href
                }
            };
        }
    }
};
