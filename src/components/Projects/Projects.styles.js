import styled from "styled-components";

export const Projects = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    gap: 20px;
    margin: 20px 0px;
`;
export const ProjectImg = styled.img`
    width: 16rem;
    height: 16rem;
    border-radius: 2rem;
    margin-left: 2rem;
    display: block;
    object-fit: cover;

    @media (max-width: 760px) {
        margin-bottom: 20px;
    }
`;

