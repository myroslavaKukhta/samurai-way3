import React from 'react';
import './App.css';
import picture from './picture.webp';
import logo from './logo.svg';

function App() {
  return (
      <div className="app-wrapper">
          <header className="header">
              <img src={logo} alt='logo'/>
          </header>
          <nav className="nav">
              <div>
                  <a>Profile</a>
              </div>
              <div>
                  <a>Messages</a>
              </div>
              <div>
                  <a>News</a>
              </div>
              <div>
                  <a>Music</a>
              </div>
              <div>
                  <a>Settings</a>
              </div>
          </nav>
          <div className="content">
              <img src={picture} alt='logo'/>
              Main content
          </div>
          <footer className="footer">
              Footer
          </footer>
      </div>
  );
}

export default App;
