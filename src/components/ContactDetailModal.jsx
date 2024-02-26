import React, { useState, useEffect } from 'react'

function ContactDetailModal({ contactDetailVsibility, changeContactDetailVisibility, selectedContact, updateContact, changeMsgBoxVisibility, deleteContact }) {

    const [isEditing, setEditing] = useState(false);
    const [editedContact, setEditedContact] = useState(selectedContact);
    const [initialContact, setInitialContact] = useState();

    //Sincroniza los cambios en selectedContact con editedContact
    useEffect(() => {
        setEditedContact(selectedContact);
    }, [selectedContact]);

    const handleEditClick = () => {
        setEditing(true);
        //Almacena una copia de editedContact antes de que el usuario realice ninguna modificación
        setInitialContact(editedContact);
    };

    const handleSaveClick = () => {
        setEditing(false);
        //Actualiza los datos del contacto en el ArrayList de contactos
        updateContact(editedContact);
    };

    const handleCancelClick = () => {
        setEditing(false);
        // Restaurar los cambios no guardados al estado original y deshecha las modificaciones de los campos
        setEditedContact(initialContact);
    };

    const handleDeleteClick = () => {
        changeMsgBoxVisibility();
    }

    //Utiliza 2 templates: uno para la edición; otro para la visualización
    const editingTemplate = (
        <div>
            {editedContact && (
                <div className="contacDetails">
                    <div className="formBlock">
                        <label htmlFor="name">Nombre:</label>
                        <input
                            value={editedContact.name}
                            onChange={(e) => setEditedContact({ ...editedContact, name: e.target.value })}
                        />
                    </div>
                    <div className="formBlock">

                        <label htmlFor="surname">Apellido:</label>
                        <input
                            value={editedContact.surname}
                            onChange={(e) => setEditedContact({ ...editedContact, surname: e.target.value })}
                        />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="company">Empresa:</label>
                        <input
                            value={editedContact.company}
                            onChange={(e) => setEditedContact({ ...editedContact, company: e.target.value })}
                        />
                    </div>
                    <div className="formBlock">

                        <label htmlFor="mail">Correo Electrónico:</label>
                        <input
                            value={editedContact.email}
                            onChange={(e) => setEditedContact({ ...editedContact, email: e.target.value })}
                        />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="tel">Número de Telefono:</label>
                        <input
                            value={editedContact.phoneNumber}
                            onChange={(e) => setEditedContact({ ...editedContact, phoneNumber: e.target.value })}
                        />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="address">Dirección:</label>
                        <input
                            value={editedContact.address}
                            onChange={(e) => setEditedContact({ ...editedContact, address: e.target.value })}
                        />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="website">Sitio Web:</label>
                        <input
                            value={editedContact.website}
                            onChange={(e) => setEditedContact({ ...editedContact, website: e.target.value })}
                        />

                        <label htmlFor="state">Estado</label>
                        <select
                            value={editedContact.clientState}
                            onChange={(e) => setEditedContact({ ...editedContact, clientState: e.target.value })}
                        >
                            <option id="potentialCustomer" value="Cliente Potencial">Cliente Potencial</option>
                            <option id="proposalSubmission" value="Envío de propuesta">Envío de Propuesta</option>
                            <option id="negotiation" value="Negociación">Negociación</option>
                            <option id="closignSales" value="Cierre de venta">Cierre de Venta</option>
                            <option id="active" value="Activo">Activo</option>
                            <option id="idle" value="Inactivo">Inactivo</option>
                            <option id="recurrentCustomer" value="Cliente Recurrente">Cliente Recurrente</option>
                        </select>
                    </div>
                    <div className="formBlock">
                        <label htmlFor="detail">Detalle:</label>
                        <textarea
                            className="noResize"
                            id="detail"
                            cols="45"
                            rows="1"
                            value={editedContact.detail}
                            onChange={(e) => setEditedContact({ ...editedContact, detail: e.target.value })}
                        />
                    </div>
                </div>
            )}
            <div className='buttonsArea'>
                <button onClick={handleSaveClick}>Guardar</button>
                <button onClick={handleCancelClick}>Cancelar</button>
            </div>
        </div>
    )

    const viewTemplate = (
        <div>
            <span className="close" id="closeDetailsButton" onClick={changeContactDetailVisibility}>&times;</span>

            {editedContact && (
                <div className="contactDetails">
                    <p><b>{editedContact.name} {editedContact.surname}</b></p>
                    <p><span>Empresa: </span>{editedContact.company}</p>
                    <p><span>Email: </span>{editedContact.email}</p>
                    <p><span>Tel.: </span>{editedContact.phoneNumber}</p>
                    <p><span>Dirección: </span>{editedContact.address}</p>
                    <p><span>Website: </span>{editedContact.website}</p>
                    <p><span>Estado: </span>{editedContact.clientState}</p>
                    <p><span>Detalle: </span>{editedContact.detail}</p>
                </div>
            )}
            <div className='buttonsArea'>
                <button onClick={handleEditClick}>Editar</button>
                <button onClick={handleDeleteClick}>Eliminar</button>
            </div>
        </div>
    );

    return (
        <div id="personDetailsModal" className="modal" style={{ display: contactDetailVsibility }}>
            <div className="modalContent">
                {isEditing ? editingTemplate : viewTemplate}
            </div>
        </div>
    )
}

export default ContactDetailModal