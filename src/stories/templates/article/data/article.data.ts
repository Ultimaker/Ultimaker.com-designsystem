import { data as HeroArticle } from 'components/organisms/hero-article/data/hero-article.data';
import { data as ArticleContent } from 'components/organisms/article-content/data/article-content.data';
import { janDeGroot } from 'src/js/components/organisms/article-header/data/examples/jan-de-groot';
import { markRutte } from 'src/js/components/organisms/article-header/data/examples/mark-rutte';

export const data = {
    default: {
        heroArticle: HeroArticle.default,
        articleHeader: markRutte,
        articleContent: ArticleContent.default,
    },
    noIntro: {
        heroArticle: HeroArticle.default,
        articleHeader: janDeGroot,
        articleContent: ArticleContent.noIntro,
    },
};
