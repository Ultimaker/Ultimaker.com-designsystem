import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs/vue';
import brandsData from 'src/js/components/page/brands/brands.data';
import sliderRevealData from 'src/js/components/page/slider-reveal/slider-reveal.data';
import examplesData from 'src/js/components/page/examples/examples.data';
import exploreData from 'src/js/components/page/explore/explore.data';
import ecosystemData from 'src/js/components/page/ecosystem/ecosystem.data';
import casesData from 'src/js/components/page/cases/cases.data';
import generalContentData from 'src/js/components/page/general-content/general-content.data';

storiesOf('templates|printers', module)
	.addDecorator(withKnobs)
	.add('Printers', () => {
		const brands = object('Brands', brandsData),
			sliderReveal = object('Slider', sliderRevealData),
			examples = object('Examples', examplesData),
			explore = object('Explore', exploreData),
			ecosystem = object('Ecosystem', ecosystemData),
			cases = object('Cases', casesData),
			generalContent = object('General Content', generalContentData);

		return {
			data: () => ({
				brands,
				sliderReveal,
				examples,
				explore,
				ecosystem,
				cases,
				generalContent
			}),
			template: `
                <div>
                    <header-main></header-main>
                    <main>
                        <brands v-bind="brands"></brands>
                        <slider-reveal v-bind="sliderReveal"></slider-reveal>
                        <examples v-bind="examples"></examples>
                        <explore v-bind="explore"></explore>
                        <ecosystem v-bind="ecosystem"></ecosystem>
                        <cases v-bind="cases"></cases>
                        <general-content v-bind="generalContent"></general-content>
                    </main>
                    <footer></footer>
                </div>
            `
		}
	});