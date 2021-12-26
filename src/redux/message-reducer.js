const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEKST ="UPDATE-NEW-MESSAGE-TEKST";

let initialState = {
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
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessagesData,
            };
            state.messagesData.push(newMessage);
            state.newMessagesData=" ";
            return state;
        case UPDATE_NEW_MESSAGE_TEKST:
            state.newMessagesData = action.newTekst;
            return state;
        default:
            return state
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const onMessageChangeCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEKST, newTekst: body})

export default messageReducer;