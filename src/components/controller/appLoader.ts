import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        // super('https://newsapi.org/v2/', {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '81ec0cc9046846af844d3cf0816c52e1', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
