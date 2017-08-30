export default class MovieService {
    static _name = 'moveService';
    static $inject = ['$http'];
    constructor(private $http) {
    }


    getMovieList() {
        return this.$http.get(`/movies.json`).then((response: any) => {
            if (!response.data ) {
                return false;
            }
            return response.data.movies;
        })
    }
}