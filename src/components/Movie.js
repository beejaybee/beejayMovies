import React from 'react';
import { useParams } from 'react-router-dom';

//components
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actors from './Actors';

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//Hook
import { useMovieFetch } from '../hooks/useMovieFetch';

//image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const {movieId} = useParams();
    const {state: movie, loading, error} = useMovieFetch(movieId);
    
    console.log(movie);
    
    if(loading) return <Spinner />
    if(error) return <div>Something went wrong</div>

    const renderGridChildren = () => {
        return movie.actors.map(actor => (
            <Actors
            key={actor.credit_id} 
            actorName={actor.name}
            clickable
            actorId={actor.id}
            imageUrl={
                actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
              }
              character={actor.character}
            />
        ))
    }
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie} />
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <Grid header="Actors">
                {renderGridChildren()}
            </Grid>
        
        
        </>
    )
}


export default Movie;