import './movie-box.scss';
class MovieBox{
    static $inject = [];
    constructor(){}
}

const MovieBoxComponent = {
    template: require('./movie-box.html'),
    bindings: <{[binding: string]: string}> {
        movieItem$: '<movie'
    },
    controller: MovieBox,
    name: 'movieBox',
    controllerAs: '$mv'
};

export default MovieBoxComponent;