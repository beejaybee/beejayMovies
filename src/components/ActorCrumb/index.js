import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// styles

import { Wrapper, Content } from './ActorCrumb.style';


const ActorCrumb = ({actorName}) => {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <Content>
                <Link to='/' className='no-underline'>
                    <span >Home</span>
                </Link>
                <span className='go_back' onClick={() => navigate(-1)}>Go back</span>
                <span>|</span>
                <span>{actorName}</span>
            </Content>
        </Wrapper>
    )
}

ActorCrumb.prototypes = {
    actorName: PropTypes.string
}



export default ActorCrumb;