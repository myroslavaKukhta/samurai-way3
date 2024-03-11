import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {rerenderEntireTree} from'./render'
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addPost } from './redux/state';

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//
// let rerenderEntireTree = () => {
//
//     root.render(
//         <React.StrictMode>
//             <App state={state} addPost={addPost}/>
//         </React.StrictMode>
//     );
// }

rerenderEntireTree(state);
//
// reportWebVitals();
