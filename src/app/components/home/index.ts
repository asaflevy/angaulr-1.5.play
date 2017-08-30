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
        .state('app.home', {
            url: '/',
            component: HomeComponent.name,
            resolve: {
                movieList: [MovieService._name, (movieService) => {
                    return movieService.getMovieList();
                }]
            }
        })
        .state('app.MovieDetails', {
            url: '/movie/:id',
            component: MovieDetailsComponent.name
        });

}
function runConfig(NavService: NavService) {
    const page: NavItem = {
        state: 'app.home',

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