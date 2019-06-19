import { data as HeroArticle } from 'components/organisms/hero-article/data/hero-article.data';
import { data as ArticleContent } from 'components/organisms/article-content/data/article-content.data';
import { data as ArticleHeader } from 'src/js/components/organisms/article-header/data/article-header.data';

export const data = {
    default: {
        heroArticle: HeroArticle.default,
        articleHeader: ArticleHeader.default,
        articleContent: ArticleContent.default,
    },
    noIntro: {
        heroArticle: HeroArticle.default,
        articleHeader: ArticleHeader.default,
        articleContent: ArticleContent.noIntro,
    },
};
