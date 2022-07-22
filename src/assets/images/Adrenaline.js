import React from 'react';
import styled from 'styled-components';

const AdrenalineStyles = styled.div`
  width: 65%;
  margin: auto;
  .adr_text {
    color: white;
    height: 200px;  
    background-color: var(--crimson);
    border: 1px solid var(--crimson);
    box-shadow: 8px 8px 70px var(--crimson);
    border-radius: 10px;
    font-size: 3rem;
    padding-top: 70px;  
    margin: auto;

  p {
  font-family: 'cursive';
  text-align: center;
  }
`;

export default function Adrenaline() {
  return (
    <AdrenalineStyles>
     <div className="adr_text">
       <p>Adrenaline</p>       
       <p>Nine</p>

     </div>
    </AdrenalineStyles>
  )
}