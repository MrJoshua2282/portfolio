import styled from "styled-components";

export const AboutMeWrapper = styled.div`
width: 100%;    
height: max-content;
padding: 33rem 2rem 2rem 2rem;
border-bottom: .5rem solid rgb(20, 184, 196);
display: grid;
justify-content: center;
justify-items: center;
margin-top: -4rem;
z-index: -11;
position: relative;

@media (max-width: 1455px) {
        padding: 20rem 2rem 2rem 2rem;
    }
@media (max-width: 850px) {
        padding: 10rem 2rem 2rem 2rem;
}
`;
export const AboutMeSection = styled.section`
        display: inline-grid;
        justify-items: center;
        background-color: rgba(255, 255, 255, .5);
        padding: 10px;
        border-radius: 4rem;
        margin: 0px auto;

`;
export const AboutMeImage = styled.img`
margin-top: 3rem;
        margin-bottom: 3rem;
        width: 15rem;
        height: 25rem;
        border-radius: 2rem;
`;
export const AboutMeList = styled.li`
font-family: inherit;
        letter-spacing: .5;
        font-size: 1.5rem;
        list-style: none;
        text-align: center;
        ${({bold}) => bold && `font-weight: 600;
    font-size: 1.75rem;`}
`;
