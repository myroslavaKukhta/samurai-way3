type Listener = () => void;

let listeners: Listener[] = [];

export const subscribe = (listener: Listener) => {
    listeners.push(listener);
};

export const notifySubscribers = () => {
    listeners.forEach(listener => listener());
};

export interface Dialog {
    id: number;
    name: string;
}

export interface Message {
    id: number;
    message: string;
}

export interface PostType {
    id: number;
    post: string;
}

export interface AppState {
    dialogs: Dialog[];
    messages: Message[];
    postsData: PostType[];
    newPostText: string;
}

let state: AppState = {
    dialogs: [
        {id: 1, name: 'Horse'},
        {id: 2, name: 'Pawn'},
        {id: 3, name: 'Officer'},
    ],
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Would you like to play chess with me?' },
        { id: 3, message: 'Hello, I`d like to play!' },
    ],
    postsData: [
        { id: 1, post: 'Hi, how are you?' },
        { id: 2, post: "Good, glad to see you!" },
        { id: 3, post: "Let`s play!" },
    ],
    newPostText: 'itkam'
};

export let addPost = (postMessage: string): void => {
    let newId = state.postsData.length ? state.postsData[state.postsData.length - 1].id + 1 : 1;
    let newPost: PostType = {
        id: newId,
        post: postMessage
    };
    state.postsData.push(newPost);
    notifySubscribers();
}

export let changeNewPostText = (newText: string): void => {
    state.newPostText = newText;
    notifySubscribers();
}

export default state;
