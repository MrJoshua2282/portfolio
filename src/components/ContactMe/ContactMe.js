import React, { useState } from 'react';

import './ContactMe.scss';
import Logo from '../Logos/Logo';
import Resume from '../Resume/Resume';

export default function ContactMe() {
    const [showModal, setShowModal] = useState(false)
    return (
        <React.Fragment>
            <div className='contact_me_div'>
                <li className='list bold'>Willing to relocate!!!</li>
                <section className='contact_me_sec'>
                    <span>
                        <li className='list bold'>Cell: (732) 567-3693</li>
                        <li className='list bold'>Email: jmccue369@gmail.com</li>
                    </span>
                    <span>
                        <li className='list bold'><a href='https://www.linkedin.com/in/joshua-mccue-4616121ab/' target='_blank' rel="noopener noreferrer"><Logo language='linkedin' /></a></li>
                        <li className='list bold'><a href='https://github.com/MrJoshua2282' target='_blank' rel="noopener noreferrer"><Logo language='git' /></a></li>
                        <li className='list bold li_resume' onClick={() => {
                            setShowModal(!showModal);
                        }}>{showModal ? 'Hide Resume' : 'Show Resume'}</li>
                    </span>
                </section>
                <li className='list bold'>Thank you for your time and consideration!</li>
            </div>
            {showModal &&
                <section>
                    <Resume />
                </section>
            }
        </React.Fragment>
    )
}
