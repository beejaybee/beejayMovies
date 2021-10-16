import { useState, useEffect } from "react";

//API
import apiSettings from '../API';
//Helpers
import { isPersistedState } from '../helpers';


const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}
export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchMovies = async (page, searchTerm) => {
        try{
            setError(false);
            setLoading(true);

            const movies = await apiSettings.fetchMovies(searchTerm, page);

            setState(prev => ({
                ...movies,
                results: 
                page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
        } catch(error) {
            setError(true)
        }
        setLoading(false);
    }
    // fetch movies initially and search movies
    useEffect(() => {

        if(!searchTerm) {
            const sessionState = isPersistedState('homeState');

            if(sessionState) {
                console.log('Grabbing from session Storage')
                setState(sessionState);
                return;
            }
        }
        console.log('Grabbing from the Api')
        setState(initialState);
        fetchMovies(1, searchTerm)
    }, [searchTerm])
    
    // Load More
    useEffect(() => {
        if (!isLoadingMore) return;

        fetchMovies(state.page + 1, searchTerm)
        setIsLoadingMore(false);
    }, [isLoadingMore, state.page, searchTerm]);

    //Write to session storage

    useEffect(() => {
        if(!searchTerm) {
            return sessionStorage.setItem('homeState', JSON.stringify(state))
        }

    }, [searchTerm, state])

    return {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore}
}