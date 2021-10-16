import React from 'react';
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types';

//styles
import { Wrapper, Image } from './Actors.styles';


const Actors = ({actorName, character, imageUrl, clickable, actorId}) => (
    <Wrapper>
        {clickable ? (
            <Link  className='no_underline' to={`/actor/${actorId}`}>
            <Image src={imageUrl} alt='name of actor' />
            <h3>{actorName}</h3>
            <p>{character}</p>
        </Link>
        ) :
            <>
                <Image src={imageUrl} alt='name of actor' />
                <h3>{actorName}</h3>
                <p>{character}</p>
            </>
            
        }
            
    </Wrapper>
)
Actors.propTypes = {
    actorName: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,
    clickable: PropTypes.bool,
    actorId: PropTypes.number
}
export default Actors;