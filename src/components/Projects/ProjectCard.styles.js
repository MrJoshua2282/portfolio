import styled from "styled-components";

export const Wrapper = styled.div`
    width: 800px;
    margin: 0px auto;
    display: grid;

    justify-items: center;

    @media (max-width: 900px) {
        width: 95%;
    }
`;
export const CardBody = styled.div`
    width: inherit;
    padding: 20px;
    background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
    border-radius: 4rem;

    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    justify-content: center;
    align-items: center;
    margin: 0px auto;

    @media (max-width: 760px) {
        display: flex;
        flex-direction: column;
    }
`;

export const ProjectName = styled.div`
    letter-spacing: .5rem;
    font-size: 2rem;
`
export const ProjectLanguages = styled.div`
    letter-spacing: .25rem;
    font-size: 1.5rem;
`;
export const CardBodyRight = styled.div`
    display: grid;
    justify-items: center;
`;
export const CardButton = styled.button`
    text-decoration: none;
    outline: none;
    border-radius: 1rem;
    padding: 4px 10px;
    color: #337ab7;
    background-color: white;
    border: 1px solid black;
    margin-top: auto;
    display: block;
    width: max-content;

    &:hover {
        text-decoration: underline;
    }

    ${({margin}) => margin && `margin-top: 1.5rem;`}
`;
export const VideoContainer = styled.div`
    width: inherit;
    display: grid;
    justify-items: center;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: all .3s;
    position: relative;
`;

export const Video = styled.video`
    width: inherit;
    position: relative;
`;