import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Play from "./components/Play/Play";
import Games from "./components/Games/Games";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import s from "./App.module.css";
import state, { addPost, changeNewPostText } from "./redux/state";
import { AppState } from './redux/state';


//lesson 36 14.32min
interface AppProps {
    state: AppState;
    addPost: (postMessage: string) => void;
    changeNewPostText: (newText: string) => void;
}

const App: React.FC<AppProps> = ({ state, addPost, changeNewPostText }) => {
    return (
        <BrowserRouter>
            <div className={s.appContent}>
                <Header />
                <Navbar />
                <div className={s.content}>
                    <Routes>
                        <Route path="/profile" element={
                            <Profile
                                postsData={state.postsData}
                                addPost={addPost}
                                changeNewPostText={changeNewPostText} />} />
                        <Route path="/dialogs" element={<Dialogs dialogs={state.dialogs} messages={state.messages} />} />
                        <Route path="/play" element={<Play />} />
                        <Route path="/games" element={<Games />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;


