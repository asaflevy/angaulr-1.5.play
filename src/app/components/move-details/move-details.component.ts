import './move-details.scss';
class MovieDetails{
    static $inject = [];
    constructor(){}
}

const MovieDetailsComponent = {
    template: require('./move-details.html'),
    bindings: <{[binding: string]: string}> {
    },
    controller: MovieDetails,
    name: 'movieDetails',
    controllerAs: '$mv'
};

export default MovieDetailsComponent;