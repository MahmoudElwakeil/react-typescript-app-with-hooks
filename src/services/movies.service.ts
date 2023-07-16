import Movie from "../models/movie-view-mode";

class MoviesService {

    movies: Movie[] = [
        {
            _id: "1",
            name: "Kaptain America First Avenger",
            numberInStock: 250,
            dailyRentRate: 15,
            publishDate: "20-05-1992",
            liked: false
        },
        {
            _id: "2",
            name: "Thor",
            numberInStock: 300,
            dailyRentRate: 10,
            publishDate: "25-09-2000",
            liked: false
        },
        {
            _id: "3",
            name: "Kaptain America, Winter Soldier",
            numberInStock: 500,
            dailyRentRate: 30,
            publishDate: "13-04-2005",
            liked: true
        },
        {
            _id: "4",
            name: "The Maze Runner",
            numberInStock: 250,
            dailyRentRate: 15,
            publishDate: "20-05-1992",
            liked: true
        },
        {
            _id: "5",
            name: "Age Of Altron",
            numberInStock: 500,
            dailyRentRate: 50,
            publishDate: "03-11-2015",
            liked: true
        },
        {
            _id: "6",
            name: "End Game",
            numberInStock: 1000,
            dailyRentRate: 75,
            publishDate: "25-12-2019",
            liked: true
        },
    ];

    public getMovies(): Movie[] {
        return this.movies;
    }

    public getMovie(id: string) {
        return this.movies.find(m => m._id === id);
    }
}

export default MoviesService;