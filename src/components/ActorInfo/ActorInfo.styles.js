import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #000;
    background-position: center;
    background-size: cover;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from{
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }


`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0,0,0,0.7);
    border-radius: 20px;

    @media screen  and (max-width: 768px) {
        display: block;
        max-height: none;
    }

`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    overflow: hidden;
    
    .popularity_rating {
        display: flex;
        justify-content: flex-start;
    }
    .popularity {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background: #fff ;
        color: #000;
        font-weight: 800px;
        border-radius: 50%;
        margin: 0;
    }

    .birthday {
        margin-left: 40px;

        p {
            margin: 0;
        }
    }
    h1 {
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
    
`;