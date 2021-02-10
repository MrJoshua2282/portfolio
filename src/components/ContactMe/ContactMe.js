import React from 'react';

import './ContactMe.scss';
import Logo from '../Logos/Logo';
import ResumePdf from '../../assets/pdf/resume.pdf';

export default function ContactMe() {
    return (
        <>
            <div className='footer'>
                <li className='footer__list footer__center'>Willing to relocate!!!</li>
                <section className='footer__contact'>
                    <span>
                        <li className='footer__list'>Cell: (732) 567-3693</li>
                        <li className='footer__list'>Email: jmccue369@gmail.com</li>
                    </span>
                    <span>
                        <li className='footer__list'><a href='https://www.linkedin.com/in/joshua-mccue-4616121ab/' target='_blank' rel="noopener noreferrer"><Logo language='linkedin' /></a></li>
                        <li className='footer__list'><a href='https://github.com/MrJoshua2282' target='_blank' rel="noopener noreferrer"><Logo language='git' /></a></li>
                        <li className='footer__list footer__list--resume' > <a href={ResumePdf} target='_blank' rel="noopener noreferrer">Resume</a></li>
                    </span>
                </section>
                <li className='footer__list footer__center'>Thank you for your time and consideration!</li>
            </div>
        </>
    )
}
