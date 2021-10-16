import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

//styles 
import { Wrapper, Content } from './SearchBar.styles';

//searc icon
import searcIcon from '../../images/search-icon.svg';


const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(()=> {
            setSearchTerm(state)
        }, 500);

        return () => clearTimeout(timer);

    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searcIcon} alt="search-icon" />
                <input 
                type="text"
                placeholder='Search movies'
                onChange={e => setState(e.currentTarget.value)}
                value={state}
                />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes ={
    setSearchTerm: PropTypes.func
}

export default SearchBar