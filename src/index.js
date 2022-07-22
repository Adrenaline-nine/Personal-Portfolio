import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import "./style.css";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <GlobalStyle />
      <App />
    </StrictMode>

);