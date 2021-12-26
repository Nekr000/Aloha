import React from 'react';
import Style from './Dialogs.module.css'
import {addMessageActionCreator, onMessageChangeCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage.dialogsData
    let stateMessage = props.store.getState().messagesPage.messagesData

    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (body) => {
        props.store.dispatch(onMessageChangeCreator(body));
    }

    return (
        <div className={Style.dialogs}>
            <Dialogs onMessageChange={onMessageChange}
                     addMessage={onAddMessage}
                     dialogsPage={state}  messagePage={stateMessage}  />

        </div>
    )
}
export default DialogsContainer;



