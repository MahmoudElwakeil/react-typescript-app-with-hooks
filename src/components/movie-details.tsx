import * as React from 'react';
import Movie from '../models/movie-view-mode';
import MoviesService from '../services/movies.service';

export interface MovieDetailsProps {
    match: any;
    history: any;
}

export interface MovieDetailsState {
    movie: Movie | undefined;
}

class MovieDetails extends React.Component<MovieDetailsProps, MovieDetailsState> {
    _moviesService: MoviesService = new MoviesService();

    state = {
        movie: this._moviesService.getMovie(this.props.match.params.id)
    }

    componentDidMount() {
        let service = new MoviesService();
        this.setState({ movie: service.getMovie(this.props.match.params.id) });
    }

    handleHmoe = () => {
        this.props.history.replace('/')
    }

    handleBackToMovies = () => {
        this.props.history.replace('/movies');
    }

    render() {
        return (
            <div>
                <h3>Name: {this.state.movie?.name}</h3>
                <h3>Daily Rent Rate: {this.state.movie?.dailyRentRate}</h3>
                <h3>Number In Stock: {this.state.movie?.numberInStock}</h3>
                <h3>Publish Date: {this.state.movie?.publishDate}</h3>
                <button className="btn btn-primary" onClick={this.handleHmoe}>
                    Home
                </button>
                <button className="btn btn-primary m-2" onClick={this.handleBackToMovies}>
                    Back To Movies List
                </button>
            </div>
        );
    }
}

export default MovieDetails;