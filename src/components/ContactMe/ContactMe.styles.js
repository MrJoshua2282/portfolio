import styled from "styled-components";

export const Footer = styled.footer`
& > * {
        font-weight: bold;
        font-size: 1.75rem;
        list-style-type: none;
    }

    height: max-content;
    padding: 1rem;
    font-weight: inherit;
    background: linear-gradient(0.75turn, #3f87a6, #ebf8e1);
    border-bottom: .5rem solid rgb(20, 184, 196);
`;
export const FooterContact = styled.section`
 display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
`;
export const FooterList = styled.li`
${({cursor}) => cursor && `cursor: pointer;`}
${({center}) => center && `text-align: center;`}
`;
export const Ul = styled.ul`
    list-style-type: none;

    ${({left}) => left && `justify-self: start;
    margin-left: 80px;`}
    ${({right}) => right && `justify-self: end;
    margin-right: 80px; display: grid;
    justify-items: center;`}
`;
export const Anchor = styled.a`
    margin-right: 10px;
`;