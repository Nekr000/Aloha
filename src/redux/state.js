import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sideBarReducer from "./sideBar-reducer";

let store =
    {
        _state: {
            profilePage: {
                postsData: [
                    {id: "1", message: "Hello world", likesCount: 12},
                    {id: "2", message: "1000-7", likesCount: 23},
                    {id: "3", message: "I Love World", likesCount: 0},
                    {id: "4", message: "Hi", likesCount: 123},
                    {id: "5", message: "Hi", likesCount: 32},
                    {id: "6", message: "Hi", likesCount: 97}],
                newPostText: "put message here"
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
                    {
                        id: "4",
                        message: "What aboutasdfasdfsdafasdfsadfasdfsadfsadfsadfasdfsadfasfasdfasdfasdfasdfasdfsd ?"
                    },
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
        _callSubscriber() {
            console.log('dfsdf')
        },

        getState() {
            return this._state;
        },
        subscribe(observer) {
            this._callSubscriber = observer;
        },


        dispatch(action) {

            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.messagesPage = messageReducer(this._state.messagesPage, action);
            this._state.sideBar = sideBarReducer(this._state.sideBar, action);

            this._callSubscriber(this._state);
        }

    }




export default store;
window.store = store;