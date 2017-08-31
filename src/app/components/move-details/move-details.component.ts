import './move-details.scss';
class MovieDetails{
    private movie$:Array<any>;

    static $inject = [];
    constructor(){
    }
}

const MovieDetailsComponent = {
    template: require('./move-details.html'),
    bindings: <{[binding: string]: string}> {
        movie$:'<movie'
    },
    controller: MovieDetails,
    name: 'movieDetails',
    controllerAs: '$mv'
};

export default MovieDetailsComponent;