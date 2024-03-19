import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './state/store';
import './styles/Giveaway.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import * as process from 'process';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <GoogleOAuthProvider
        clientId={
            '765504554325-g9tb2tpfd6otv583dovhkevk4bcv0kh9.apps.googleusercontent.com'
        }
    >
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </GoogleOAuthProvider>
);
