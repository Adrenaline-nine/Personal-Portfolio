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
}) {
  return (
  <SocialStyles>
    <div className="icon">{icon}</div>
    <div className="info">        <PText>{text}</PText>
    </div>

  </SocialStyles>
  )
}
