import styled from "styled-components";

export const LanguageName = styled.span`
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: .5;
    font-size: 1.5rem;
`;
export const IconContainer = styled.span`
    display: flex;
    align-content: center;
`;
export const Logo = styled.img`
    width: 6rem;
    height: 6rem;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 0.5);
    margin: .5rem;

    ${({ language }) => {
        if (["sass", "redux"].includes(language)) {
            return `
            border-radius: 50%;
            background: white;
            `;
        } else if (language === "react") {
            return `
            border-radius: 50%;
            background: rgb(67, 217, 255);
            `;
        } else if (language === "next") {
            return `
            background: white;
            display: block;
            object-fit: scale-down;
            `;
        } else if (language === "node") {
            return `
            border-radius: 50%;
            background: rgb(0, 151, 0);
            `;
        } else if (language === "mysql") {
            return `
            border-radius: 50%;
            border: 1px solid rgb(97, 97, 97);
            `;
        } else if (language === "mongoose") {
            return `
            background: rgba(255, 255, 255, 0.5);
            display: block;
            object-fit: cover;
            `;
        } else if (["mongodb", "js"].includes(language)) {
            return `
            background: black;
            `;
        } else if (language === "express") {
            return `
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            `;
        } else if (language === "git") {
            return `
            border-radius: 50%;
            background: transparent;
            margin-bottom: 1.5rem;
            `;
        } else if (language === "linkedin") {
            return `
            margin-bottom: 1.5rem;
            `;
        } else if (["shopify", "sequelize"].includes(language)) {
            return `
            background: transparent;
            `;
        }
    }}
`;
