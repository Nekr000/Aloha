import React from 'react';
import Style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import {addMessageActionCreator, onMessageChangeCreator} from "../../redux/state";





const Dialogs = (props) => {
    let dialogElements = props.dialog
        .map((dialogs) => <DialogItem name={dialogs.name} id={dialogs.id}/>);
    let messageElements = props.message
        .map((dialog) => <DialogItem name={dialog.message} id={dialog.id}/>);

let newMessage = React.createRef();

let addMessage = () => {
    props.dispatch(addMessageActionCreator());
    }
 let onMessageChange = () => {
    let text = newMessage.current.value;
    props.dispatch(onMessageChangeCreator(text));
 }

    return (
        <div className={Style.dialogs}>
            <div className={Style.dialogsItem}>
                {dialogElements}
            </div>


            <div>
                {messageElements}

                    <textarea onChange={onMessageChange} ref={newMessage} value={props.newDialogText}> </textarea>
                    <button onClick={addMessage}>Send</button>

            </div>

        </div>
    )
}
export default Dialogs;



