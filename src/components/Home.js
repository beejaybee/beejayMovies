import React from 'react';

//config
import {
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL
} from '../config';

// components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

 //image
import NoImage from '../images/no_image.jpg';

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';
const Home = () => {
    const {
      state,
      loading,
      error,
      searchTerm,
      setSearchTerm,
      setIsLoadingMore
    } = useHomeFetch();


    const renderHeroImage = () => {
        return !searchTerm && state.results[0] ? 
            <HeroImage 
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
            /> 
            : null
    }

    const renderGridChildren = () => (
        state.results.map(movie => (
            <Thumb 
            key={movie.id}
            clickable
            image={
                movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            
            movieId={movie.id}
            />
        ))
    );

    const renderButton = () => (
        state.page < state.total_pages && !loading && (
            <Button
            text='Load More'
            callback={setIsLoadingMore}
            />
        )
    )

        if(error) {
            return (
                <div>Something went wrong...</div>
            )
        }
    

        return (
            <>
                {renderHeroImage()}

                <SearchBar setSearchTerm={setSearchTerm} />

                <Grid header={searchTerm ? 'Search Results' : 'Popular movies'}>
                    {renderGridChildren()}
                </Grid>

                {loading && <Spinner />}
                {renderButton()}
            </>
    );
    
}


export default Home;