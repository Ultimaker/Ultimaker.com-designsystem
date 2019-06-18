import { data as ArticleIntro } from 'components/molecules/article-intro/data/article-intro.data';
import { data as ArticleText } from 'components/molecules/article-text/data/article-text.data';
import { data as ArticleImage } from 'components/molecules/article-image/data/article-image.data';
import { data as CtaBlock } from 'components/molecules/cta-block/data/cta-block.data';

export const data = {
    default: {
        molecules: [
            ArticleIntro.default,
            ArticleText.default,
            CtaBlock.default,
            ArticleImage.default,
            ArticleText.default,
            CtaBlock.default,
            ArticleText.default,
            CtaBlock.default,
            ArticleText.default,
        ],
    },
    noIntro: {
        molecules: [
            ArticleText.default,
            ArticleImage.default,
            CtaBlock.default,
            ArticleText.default,
        ],
    },
};
