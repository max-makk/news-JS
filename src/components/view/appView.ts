import News from './news/news';
import Sources from './sources/sources';

import { Item } from './sources/sources';
import { Article } from './news/news';

export interface NewsList {
    articles: Article[];
    status: string;
    totalResults: number;
}

export interface SourcesList {
    sources: Item[];
    status: string;
}

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsList) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesList) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
