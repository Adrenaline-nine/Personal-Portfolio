import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
import SocialIcons from './SocialIcons';
import { FaFacebook, FaTwitter, FaTelegram } from 'react-icons/fa';

const FooterStyle = styled.div`
  margin-top: 10rem;
  padding-top: 10rem;
  background-color: var(--black);
  color: var(--lavender);
  width: 100%;

  .containers {    display: flex;
}
  .heading {          
    width: 90%;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--crimson);
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  .container_wrapper {
    display: flex;
    gap: 3rem;    
    width: 90%;    
    margin: auto;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    color: var(--black);
    background-color: var(--lavender);
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {    
      width: 80%;
      margin: auto;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="containers">
        <div className="container_wrapper">
          <div className="footer__col1">
            <FooterCol
              heading="Important Links"
              links={[
                {
                  title: 'Home',
                  path: '/',
                  type: 'Link',
                },
                {
                  type: 'Link',
                  title: 'About',
                  path: '/about',
                },
                {
                  type: 'Link',
                  title: 'Projects',
                  path: '/projects',
                },
                {
                  type: 'Link',
                  title: 'Contact',
                  path: '/contact',
                },
              ]}
            />
            <FooterCol
              heading="Contact Info"
              links={[
                {
                  title: '+2348130324541',
                  path: 'tel:+2348130324541',
                },
                {
                  title: 'adrenaline.nine0@gmail.com',
                  path: 'mailto:adrenaline.nine0@gmail.com',
                },
                {
                  itle: 'CHS, Amassoma, Bayelsa State, Nigeria',
                  ath: 'http://google.com/maps',
                },
              ]}
            />
          </div>
          <div className="footer__col3">
            <h2 className="heading">Social Icons</h2>              
            <a href="https://www.facebook.com/profile.php?id=100074182476935" target="_blank" rel="noreferrer">
            <SocialIcons text="Facebook" icon={<FaFacebook />} /></a>
                          
            <a href="https://twitter.com/Adrenaline_nine?t=iUib-BHsczcxO-VzpN8Qeg&s=09" target="_blank" rel="noreferrer">
            <SocialIcons text="Twitter" icon={<FaTwitter />} /></a>

            <a href="https://t.me/Adrenaline_Nine" target="_blank" rel="noreferrer">
            <SocialIcons text="Telegram" icon={<FaTelegram />} />       </a>

          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="containers">
          <PText>
            © 2021 - Adrenaline Nine | Designed By{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100074182476935"
            >
              Adrenaline_nine
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
