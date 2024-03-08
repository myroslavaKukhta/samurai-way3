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
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
// lesson 28

interface DialogItem {
    id: number;
    name: string;
}

interface MessageItem {
    id: number;
    message: string;
}

interface PostItem {
    id: number;
    post: string;
}

interface AppState {
    dialogs: DialogItem[];
    messages: MessageItem[];
    postsData: PostItem[];
}

const App: React.FC<AppState> = ({ dialogs, messages, postsData }) => {
    return (
        <BrowserRouter>
            <div className={s.appContent}>
                <Header />
                <Navbar />
                <div className={s.content}>
                    <Routes>
                        <Route path="/profile" element={<Profile postsData={postsData} />} />
                        <Route path="/dialogs" element={<Dialogs dialogs={dialogs} messages={messages} />} />
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

