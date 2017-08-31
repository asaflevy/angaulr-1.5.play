import './home.scss';

export class Home implements ng.IComponentOptions {
    static $inject = ['$state'];
    private movieList: Array<any>;

    constructor(private $state) {
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