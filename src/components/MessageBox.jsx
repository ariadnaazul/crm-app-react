import React from 'react'

function MessageBox({msgText, msgBoxVisibility, changeMsgBoxVisibility, selectedContact, deleteContact, changeContactDetailVisibility}) {

    const handleCancelBtn = () => {
        changeMsgBoxVisibility();
    }

    const handleDeleteBtn = () => {
        deleteContact(selectedContact.id);
        changeMsgBoxVisibility();
        changeContactDetailVisibility();
    }

  return (
    <div className='msgArea modal' style={{display: msgBoxVisibility}}>
        <div className='msgBox'>
            <div className='panel'>
                <p>{msgText}</p>
                <button onClick={handleCancelBtn}>Cancelar</button>
                <button onClick={handleDeleteBtn}>Aceptar</button>
            </div>

        </div>
    </div>
  )
}

export default MessageBox