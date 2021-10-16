import { useState, useEffect } from "react";

// api
import apiSettings from "../API"; 

//helpers
import { isPersistedState } from "../helpers";


export const useActorFetch = actorId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchActor = async () => {
            try {
                setLoading(true);
                setError(false);

                const actor = await apiSettings.fetchActor(actorId);

                setState({
                    ...actor
                })
            }catch(error) {
                setError(true)
            }
            setLoading(false)
        }
        const sessionState = isPersistedState(actorId);
        
        if(sessionState) {
            setState(sessionState);
            setLoading(false);
            return
        }

        fetchActor()
    }, [actorId]);

    useEffect(() => {
        sessionStorage.setItem(actorId, JSON.stringify(state))
    }, [actorId, state]);
    
    return {state, error, loading}
}