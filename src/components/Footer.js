import React from 'react'
import { Button } from './Button'
import "./Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
           <p className='footer-subscription-heading'>Sign up to be the first to get updates about new camps and classes</p>
           <p className='footer-subscription-text'>You can Unsubscribe at anytime!</p>
           <div className='input-areas'>
            <form>
                <input type="email" name="email" className='footer-input' placeholder='Your Email'/>
                <Button buttonStyle='btn--outline'>Subscribe</Button>

                
            </form>
        </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimontials</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link className='social-logo'>
                        NEXT 
                    </Link>
                </div>
                <small className='website-rights'>NEXT © 2023</small>
                <div className='social-icons'>
                    <Link className='social-icon-Link facebook'
                    to='/' 
                    target='_blank'
                    aria-label='Facebook'
                    >
                        Facebook
                    </Link>
                    <Link className='social-icon-Link instagram'
                    to='/' 
                    target='_blank'
                    aria-label='Instagram'
                    >
                        Instagram
                    </Link>
                    <Link className='social-icon-Link youtube'
                    to='/' 
                    target='_blank'
                    aria-label='Youtube'
                    >
                        Youtube
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Footer