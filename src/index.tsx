import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPost, State} from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export let rerenderEntireTree = (state: State) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>
    );
};

rerenderEntireTree(state);

reportWebVitals();
