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

// lesson 28
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

interface AppProps {
    state: AppState;
    addPost: (postMessage: string) => void;
}

const App: React.FC<AppProps> = ({ state, addPost }) => {
    return (
        <BrowserRouter>
            <div className={s.appContent}>
                <Header />
                <Navbar />
                <div className={s.content}>
                    <Routes>
                        <Route path="/profile" element={<Profile postsData={state.postsData} addPost={addPost} />} />
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

