import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/state';

interface Dialog {
    id: number;
    name: string;
}

interface Message {
    id: number;
    message: string;
}

interface Post {
    id: number;
    post: string;
}

interface AppState {
    dialogs: Dialog[];
    messages: Message[];
    postsData: Post[];
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export let rerenderEntireTree = (state: AppState) => {

    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>
    );
}


reportWebVitals();
