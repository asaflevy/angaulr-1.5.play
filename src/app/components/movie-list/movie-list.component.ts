import './movie-list.scss'
import MovieService from './services/movie.srv'
class MovieList {
    static $inject = ['$scope', '$state'];
    moviesIn$: Array<Object>;
    constructor(private $scope, private $state) {
        console.log('movies-list12',this.moviesIn$)




    }
}


const MovieListComponent = {
    template: require('./movie-list.html'),
    bindings: <{ [binding: string]: string }> {
        'moviesIn$': '=movies'
    },
    controller: MovieList,
    name: 'movieList',
    controllerAs: '$mv'
};

export default MovieListComponent;
