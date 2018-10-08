import {text, object, files} from '@storybook/addon-knobs';
import data from './footer-main.stories.json';

const formatCategories  = categories => {
    const formattedCategories = [];

    // format each category with the navLinks object, so we can use the object method
    // of addon-knobs to show the links of the category
    categories.map(category => {
        const objCategory = {
            title: '',
            navLinks: {
                children: []
            }
        };

        objCategory.title = category.title;
        category.children.map(link => {
            objCategory.navLinks.children.push(link.title);
        });
        formattedCategories.push(objCategory);
    });

    return formattedCategories;
};

const createSocialMediaIcons = () => (
    data.socialMedia.map(({image}, i) => ({
        image: {
            ... image,
            mobileWidth: {
                url: files(`${i+1}. Icon for ${image.alt}`, ['image/png', 'image/jpg', 'image/svg+xml'], image.mobileWidth.url)
            }
        }
    }))
);

export default () => ({
    footer: {
        categories: formatCategories(data.minorNav.children).map((item, i) => ({
            title: text(`Category ${i+1} title`, item.title),
            links: object(`Links for Category ${i+1}`, item.navLinks)
        })),
        socialMediaIcons: createSocialMediaIcons(),
        legal: data.legal.children.map((leg, i)  => ({
            title: text(`Legal title ${i+1}`, leg.title)
        }))
    }
});
