import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addPost, changeNewPostText, subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
        </React.StrictMode>
    );
};

subscribe(rerenderEntireTree);
rerenderEntireTree();

reportWebVitals();