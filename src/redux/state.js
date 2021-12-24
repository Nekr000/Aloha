import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postsData: [
            {id: "1", message: "Hello world", likesCount: 12},
            {id: "2", message: "1000-7", likesCount: 23},
            {id: "3", message: "I Love World", likesCount: 0},
            {id: "4", message: "Hi", likesCount: 123},
            {id: "5", message: "Hi", likesCount: 32},
            {id: "6", message: "Hi", likesCount: 97}],
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

        ]
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
};

export let addPost = (postMessage) => {

    let newPost = {
        id: 7,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}



export default state;