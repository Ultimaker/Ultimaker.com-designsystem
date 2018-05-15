import Vue from 'vue';
import linkedProperty from 'mixins/linked-property';

export default Vue.component('colors', {
    name: 'colors',
    template: require('./colors.html'),
    mixins: [linkedProperty('materials')],
    data: () => ({
        activeColor: null,
        imageLoaded: false
    }),
    props: {
        title: {
            type: String,
            require: true
        },
        links: {
            type: Object,
            required: true
        }
    },
    computed: {
        shouldRender() {
            return this.materials !== null;
        },
        colors() {
            if (!this.materials || !this.materials.length) {
                return null;
            }

            return this.materials[0].material_colors;
        },
        image() {
            if (this.activeColor) {
                return this.activeColor.image[0];
            }
            if (this.colors && this.colors.length) {
                return this.colors[0].image[0];
            }

            return null;
        },
        imageClass() {
            return {
                'colors__image--loading': !this.imageLoaded
            };
        }
    },
    methods: {
        checkTooltipPos(e) {
            const target = e.currentTarget,
                tooltip = target.querySelector('.tooltip'),
                classPushLeft = 'push--left',
                classPushRight = 'push--right';

            tooltip.classList.remove(classPushLeft);
            tooltip.classList.remove(classPushRight);

            const boundaryLeft = tooltip.getBoundingClientRect().x,
                tooltipWidth = tooltip.getBoundingClientRect().width,
                viewportWidth = window.innerWidth,
                boundaryRight = boundaryLeft + tooltipWidth;

            if (boundaryLeft < 0) {
                tooltip.classList.add(classPushRight);
            } else if (boundaryRight > viewportWidth) {
                tooltip.classList.add(classPushLeft);
            }
        },
        setSelected(color, e) {
            this.activeColor = color;
        }
    },
    watch: {
        image() {
            this.imageLoaded = false;
        }
    },
    mounted() {
        if (!this.image && !this.$refs.image) { return; }

        const img = this.$refs.image.querySelector('img');

        if (img) {
            img.addEventListener('load', () => {
                this.imageLoaded = true;
            });
        }
    }
});
