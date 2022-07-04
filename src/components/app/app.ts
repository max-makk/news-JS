import AppController from '../controller/controller';
import { AppView, NewsList, SourcesList } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data: NewsList) => this.view.drawNews(data))
        );
        (document.querySelector('#filter') as HTMLInputElement).addEventListener('input', () =>
            this.controller.getSources((data: SourcesList) => this.view.drawSources(data))
        );
    }
}

export default App;
