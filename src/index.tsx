import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    { id: 1, name: 'Horse' },
    { id: 2, name: 'Pawn' },
    { id: 3, name: 'Officer' }
];

let messages = [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'Would you like to play chess with me?' },
    { id: 3, message: 'Hello, I`d like to play!' }
];

let postsData = [
    { id: 1, post: 'Hi, how are you?' },
    { id: 2, post: "Good, glad to see you!" },
    { id: 3, post: "Let`s play!" },
];


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App postsData={postsData} messages={messages} dialogs={dialogs }/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
