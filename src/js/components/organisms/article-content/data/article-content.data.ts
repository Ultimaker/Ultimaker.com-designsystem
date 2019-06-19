import { data as ArticleIntro } from 'components/molecules/article-intro/data/article-intro.data';
import { data as ArticleText } from 'components/molecules/article-text/data/article-text.data';
import { data as ArticleImage } from 'components/molecules/article-image/data/article-image.data';
import { data as ArticleCtas } from 'components/molecules/article-ctas/data/article-ctas.data';
import { data as ArticleVideo } from 'components/molecules/article-video/data/article-video.data';

export const data = {
    default: {
        molecules: [
            ArticleIntro.default,
            ArticleText.default,
            ArticleVideo.default,
            ArticleCtas.default,
            ArticleText.default,
            ArticleImage.default,
            ArticleText.default,
        ],
    },
    noIntro: {
        molecules: [
            ArticleText.default,
            ArticleVideo.default,
            ArticleCtas.default,
            ArticleImage.default,
            ArticleText.default,
        ],
    },
};
