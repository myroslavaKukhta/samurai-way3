import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./App.module.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Play from "./components/Play/Play";
import Games from "./components/Games/Games";
import Settings from "./components/Settings/Settings";

//lesson 26 finished

function App() {
    return (
        <BrowserRouter>
            <div className={s.appContent}>
                <Header/>
                <Navbar/>
                <div className={s.content}>
                    <Routes>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/dialogs" element={<Dialogs />} />
                        <Route path="/play" element={<Play />} />
                        <Route path="/games" element={<Games />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
