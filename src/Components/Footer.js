import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Tech</h2>
            <Link to='/Projects'>Projects</Link>
            <a href='https://github.com/MAGNUSGAO' target='_blank'>GitHub</a>
            <Link to='/Blog'>Blog</Link>
          </div>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/'>Resume</Link>
            <Link to='/About'>More</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <a href='https://twitter.com/GaoMagnus' target='_blank'>Twitter</a>
            <a href='https://www.linkedin.com/in/m-m-gao' target='_blank'>LinkedIn</a>
            <a href = "mailto: magnus.gao@outlook.com">Email</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          </div>
          <small class='website-rights'>MAGNUS GAO © 2021</small>
          <div class='social-icons'>
            
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/gaoing_full_speed/?hl=de'
              target='_blank'
              aria-label='Instagram'
            >
    
              <i class='fab fa-instagram' />
            </a>

        

            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/channel/UCa-iQ0gx6M5zS_zVxD3vbcQ'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/GaoMagnus'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href='http://www.linkedin.com/in/m-m-gao'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
