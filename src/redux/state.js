const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEKST ="UPDATE-NEW-MESSAGE-TEKST";

let store = {
   _state: {
        profilePage: {
            postsData: [
                {id: "1", message: "Hello world", likesCount: 12},
                {id: "2", message: "1000-7", likesCount: 23},
                {id: "3", message: "I Love World", likesCount: 0},
                {id: "4", message: "Hi", likesCount: 123},
                {id: "5", message: "Hi", likesCount: 32},
                {id: "6", message: "Hi", likesCount: 97}],
            newPostText:"put message here"
        },
        messagesPage: {
            dialogsData: [
                {id: "1", name: "Andrey"},
                {id: "2", name: "Liza"},
                {id: "3", name: "Rengar"},
                {id: "4", name: "Donowan"},
                {id: "5", name: "Woody"},
                {id: "6", name: "Icent"}
            ],
            messagesData: [
                {id: "1", message: "Hi"},
                {id: "2", message: "How are u?"},
                {id: "3", message: "What about ?"},
                {id: "4", message: "What aboutasdfasdfsdafasdfsadfasdfsadfsadfsadfasdfsadfasfasdfasdfasdfasdfasdfsd ?"},
                {id: "5", message: "What about ?"},

            ],
            newMessagesData: "enter text"
        },
        sideBar: {
            friends: [
                {name: "Andrey"},
                {name: "Liza"},
                {name: "Rengar"},
                {name: "Donowan"},
                {name: "Woody"},
                {name: "Icent"}
            ]
        }
    },
    _callSubscriber () {
        console.log('dfsdf')
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber=observer;
    },


    dispatch(action) {
        if (action.type === "ADD-POST") {

            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText=" ";
            this._callSubscriber(this._state);
        }
        else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === "ADD-MESSAGE") {
            let newMessage = {
                id: 6,
                message: this._state.messagesPage.newMessagesData,
            };
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessagesData=" ";
            this._callSubscriber(this._state);
        }
        else if (action.type === "UPDATE-NEW-MESSAGE-TEKST")  {
            this._state.messagesPage.newMessagesData = action.newTekst;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type:ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE})

export const onMessageChangeCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEKST, newTekst: text})

export default store;
window.store=store;