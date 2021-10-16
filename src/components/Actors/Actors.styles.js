import styled from "styled-components";;


export const Wrapper = styled.div`
    color: var(--white);
    background: var(--darkGrey);
    border-radius: 20px;
    padding: 5px;
    text-align: center;

    h3 {
        margin: 10px 0 0 0;
    }

    p {
        margin: 5px 0;
    }

    .no_underline {
        text-decoration: none;
        color: var(--white);
    }
`;

export const Image = styled.img`width: 100%;
display: block;
width: 100%;
height: 200px;
object-fit: cover;
transition: all 0.3s;
border-radius: 15px;
animation: animateActors 0.5s;
:hover{
    opacity: 0.8;
}
@keyframes animateActors {
    from {
        opacity: 0;
    }
    to {
        opacity : 1;
    }

}`;