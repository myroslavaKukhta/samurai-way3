import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./App.module.css"

function App() {
  return (
      <div className={s.appContent}>
         <Header/>
         <Navbar/>
          <div className={s.content}>
              <Dialogs/>
          </div>
          {/*<Profile/>*/}
          <Footer/>
      </div>
  );
}

export default App;
