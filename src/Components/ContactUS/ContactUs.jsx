import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='contact-us'>
            <h1 className='contact-us-text'>Contact Us</h1>
            <div className='contact-us-box'>
                <div className='contact-text'>
                    <h5 className='contact-text-title'>Number :</h5>
                    <p className='contact-text-number'>0705-667-778</p>
                </div>
                <div className='contact-text'>
                    <h5 className='contact-text-title'>Email :</h5>
                    <a className='contact-text-email' href='https://account.mail.ru/login?page=https%3A%2F%2Fe.mail.ru%2Finbox%2F&allow_external=1'>
                        Name35@mail.ru
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;