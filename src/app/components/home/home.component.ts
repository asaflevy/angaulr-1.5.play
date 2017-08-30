import './home.scss';

export class Home implements ng.IComponentOptions {
    static $inject = [];
    private movieList: Array<any>;

    constructor() {
        console.log('home',this.movieList)
    }

    $onInit() {
    }

}

const HomeComponent = {
    template: require('./home.html'),
    bindings: <{ [binding: string]: string }> {
        'movieList':'<'
    },
    controller: Home,
    name: 'home',
    controllerAs: '$mv'
};

export default HomeComponent;