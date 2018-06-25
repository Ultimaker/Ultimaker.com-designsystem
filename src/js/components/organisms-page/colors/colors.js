import HitArea from 'atoms/hit-area';
import Tooltip from 'atoms/tooltip';
import ContentLink from 'atoms/content-link';
import Color from 'molecules/color';
import CmsImage from 'organisms/cms-image';

export default {
    name: 'colors',
    components: {
        ContentLink,
        Color,
        HitArea,
        Tooltip,
        CmsImage
    },
    template: require('./colors.html'),
    data: () => ({
        activeColor: null,
        imageLoaded: false
    }),
    props: {
        title: {
            type: String,
            require: true
        },
        material: {
            type: Object,
            required: true
        }
    },
    computed: {
        shouldRender() {
            return this.material !== null;
        },
        colors() {
            if (!this.material) {
                return null;
            }

            return this.material.material_colors;
        },
        image() {
            if (this.activeColor) {
                return this.activeColor.image;
            }
            if (this.colors && this.colors.length) {
                return this.colors[0].image;
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
};
