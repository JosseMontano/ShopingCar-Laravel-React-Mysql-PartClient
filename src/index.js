

import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import './Bootstrap.css';
import {createRoot} from 'react-dom/client';
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from './context/authContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(

  <BrowserRouter>
    <AuthProvider>
  <ThemeProvider>
  <App />
  </ThemeProvider>
  </AuthProvider>
</BrowserRouter>,
);