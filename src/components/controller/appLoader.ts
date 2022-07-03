import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        // super('https://newsapi.org/v2/', {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '058889ac22994159a1df1bc86319edcf', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
