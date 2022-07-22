import React from 'react';
import { FaBeer } from 'react-icons/fa';
import styled from 'styled-components';
import PText from './PText';

const SocialStyles = styled.div`
  padding: 2rem;
  display: flex;

`;

export default function SocialIcons({
  icon = <FaBeer />,
  text = 'I need text ',
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'About',
      path: '/about',
    },
  ],
}) {
  return (
  <SocialStyles>
    <div className="icon">{icon}</div>
    <div className="info">  
    {links.map((item, index) => (
          <p key={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </p>
        ))}      
    <PText>{text}</PText>
    </div>

  </SocialStyles>
  )
}
