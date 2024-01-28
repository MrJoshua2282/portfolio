import React from "react";

import * as S from "./ContactMe.styles.js";
import {CardButton} from "../Projects/ProjectCard.styles.js"
import Logo from "../Logos/Logo";

export default function ContactMe() {
  return (
      <S.Footer>
        <S.FooterContact>
          <S.Ul left>
            <li>Cell: (732) 567-3693</li>
            <li>Email: jmccue369@gmail.com</li>
          </S.Ul>
          <S.Ul right>
            <li>
              <a
                href="https://www.linkedin.com/in/joshua-mccue-4616121ab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Logo language="linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MrJoshua2282"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Logo language="git" />
              </a>
            </li>
            <S.FooterList cursor>
              {" "}
              <S.Anchor href="https://mccue.s3.us-east-2.amazonaws.com/mccue-joshua-resume.pdf" target="_blank" rel="noopener noreferrer">
                <CardButton>Resume</CardButton>
              </S.Anchor>
            </S.FooterList>
          </S.Ul>
        </S.FooterContact>
        <S.FooterList center>
          Thank you for your time and consideration!
        </S.FooterList>
      </S.Footer>
  );
}
