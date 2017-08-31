import * as angular from 'angular';
import {State, StateProvider, Ng1StateDeclaration} from 'angular-ui-router';
import HomeComponent, {Home as HomeController} from './home.component';
import {NavService, NavItem} from './../../common/nav/nav.service';
import MovieListComponent from '../movie-list/movie-list.component'
import MovieBoxComponent from '../movie-box/movie.component'
import MovieDetailsComponent from '../move-details/move-details.component'
import MovieService from '../movie-list/services/movie.srv'

function routeConfig($stateProvider: StateProvider,) {
    "ngInject";

    $stateProvider
        .state('movies', {
            url: '/',
            component: HomeComponent.name,
            resolve: {
                movieList: [MovieService._name, (movieService) => {
                    return movieService.getMovieList();
                }]
            }
        })
        .state('details', {
            url: '/movie/:movieId',
            component: MovieDetailsComponent.name,
            resolve: {
                movie: ['$transition$', MovieService._name, ($transition$, movieService) => {
                    return movieService.getMovieList().then((moviesData) => {
                        let movieId = $transition$.params().movieId;
                        return moviesData.find(movie => movie.id == movieId);
                    })
                }]
            }
        });

}
function runConfig(NavService: NavService) {
    const page: NavItem = {
        state: 'movies',
        url: '/',
        label: 'Home'
    };
    NavService.addNavItem(page);

}

const Home: ng.IModule = angular
    .module('components.home', [])
    .component(HomeComponent.name, HomeComponent)
    .component(MovieListComponent.name, MovieListComponent)
    .component(MovieBoxComponent.name, MovieBoxComponent)
    .component(MovieDetailsComponent.name, MovieDetailsComponent)
    .service(MovieService._name, MovieService)
    .config(routeConfig)
    .run(runConfig);

export default Home.name;