const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEKST ="UPDATE-NEW-MESSAGE-TEKST";

const messageReducer = (state, action) => {
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

export const onMessageChangeCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEKST, newTekst: text})

export default messageReducer;