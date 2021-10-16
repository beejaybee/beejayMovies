import React from 'react';
import { useParams } from 'react-router-dom';

//components 
import Spinner from './Spinner';
import ActorCrumb from './ActorCrumb';
import ActorInfo from './ActorInfo';

//hook

import { useActorFetch } from '../hooks/useActorFetch';


const ShowActor = () => {
    const {actorId} = useParams();

    const {state: actor, error, loading} = useActorFetch(actorId)

    console.log(actor);
    if(loading) return <Spinner />;
    if(error) return <div>Something went wrong</div>;

    return (
        <>
            <ActorCrumb actorName={actor.name} />
            <ActorInfo actor={actor} />
        
        </>
    )
}

export default ShowActor;