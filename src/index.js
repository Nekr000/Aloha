import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (state) => {


    ReactDOM.render(
        <React.StrictMode>
            <App state = {state}
                 store={store}
                 dialog={store.getState().messagesPage.dialogsData}
                 message={store.getState().messagesPage.messagesData}
                 posts={store.getState().profilePage.postsData}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(state);
});

reportWebVitals();
