import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 1rem;
  .button {
    font-size: 30px;
    font-weight: bold;
    background-color: var(--black);
    border: 3px solid var(--crimson);
    padding: 0.7em 2em;
    border-radius: 7px;
    display: inline-block;
    color: var(--white);
    &:hover {
    background-color: var(--crimson);
    border: 3px solid var(--black);
    }
  }
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
