import { data as HeroArticle } from 'components/organisms/hero-article/data/hero-article.data';
import { data as ArticleContent } from 'components/organisms/article-content/data/article-content.data';

export const data = {
    default: {
        heroArticle: HeroArticle.default,
        articleContent: ArticleContent.default,
    },
    noIntro: {
        heroArticle: HeroArticle.default,
        articleContent: ArticleContent.noIntro,
    },
};
