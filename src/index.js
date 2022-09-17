import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextWrap from './context/ContextWrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextWrap>
        <App />
    </ContextWrap>
    

);
