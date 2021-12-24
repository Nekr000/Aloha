import React from 'react';
import Style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';







const Dialogs = (props) => {
    let dialogElements = props.dialog
        .map((dialogs) => <DialogItem name={dialogs.name} id={dialogs.id}/>);
    let messageElements = props.message
        .map((dialog) => <DialogItem name={dialog.message} id={dialog.id}/>);

let newMessage = React.createRef();

let addMessage = () => {
    let message = newMessage.current.value;
    alert(message);
    }

    return (
        <div className={Style.dialogs}>
            <div className={Style.dialogsItem}>
                {dialogElements}
            </div>


            <div>
                {messageElements}

                    <textarea ref={newMessage}> </textarea>
                    <button onClick={addMessage}>Send</button>

            </div>

        </div>
    )
}
export default Dialogs;



