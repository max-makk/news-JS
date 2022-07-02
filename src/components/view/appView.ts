import News from './news/news';
import Sources from './sources/sources';

import { Item } from './sources/sources';
import { Article } from './news/news';

export interface Status {
    status: string;
}

export interface NewsList extends Status {
    articles: Article[];
    totalResults: number;
}

export interface SourcesList extends Status {
    sources: Item[];
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
