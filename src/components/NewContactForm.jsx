import React, { useState } from "react";

function NewContactForm({ addContact, changeFormVisibility, formVisibility }) {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [website, setWebsite] = useState("");
    const [detail, setDetail] = useState("");
    const [clientState, setClientState] = useState("Cliente Potencial");

    const formFields = [
        { state: name, setState: setName },
        { state: surname, setState: setSurname },
        { state: company, setState: setCompany },
        { state: email, setState: setEmail },
        { state: phoneNumber, setState: setPhoneNumber },
        { state: address, setState: setAddress },
        { state: website, setState: setWebsite },
        { state: detail, setState: setDetail },
        { state: clientState, setState: setClientState },
      ];


    const handleChange = (e, setFunction) => {
        setFunction(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(name, surname, company, email, phoneNumber, address, website, detail, clientState);
        formFields.forEach(({ setState }) => setState(""));
        changeFormVisibility();
    }

    return (
        <div id="contactFormModal" className="modal" style={{ display: formVisibility }}>
            <div className="modalContent">
                <span className="close" id="closeFormButton" onClick={changeFormVisibility}><b>&times;</b></span>
                <form id="contactForm">
                    <div className="formBlock">
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            autoComplete="off"
                            value={name}
                            onChange={(e) => handleChange(e, setName)}
                        />
                    </div>
                    <div className="formBlock">

                        <label htmlFor="surname">Apellido:</label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            autoComplete="off"
                            value={surname}
                            onChange={(e) => handleChange(e, setSurname)}
                        />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="company">Empresa:</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            autoComplete="off"
                            value={company}
                            onChange={(e) => handleChange(e, setCompany)}
                        />
                    </div>
                    <div className="formBlock">

                        <label htmlFor="mail">Correo Electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => handleChange(e, setEmail)}
                        />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="tel">Número de Telefono:</label>
                        <input
                            type="tel"
                            id="tel"
                            name="tel"
                            autoComplete="off"
                            value={phoneNumber}
                            onChange={(e) => handleChange(e, setPhoneNumber)}
                        />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="address">Dirección:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            autoComplete="off"
                            value={address}
                            onChange={(e) => handleChange(e, setAddress)}
                        />
                    </div>
                    <div className="formBlock">
                        <label htmlFor="website">Sitio Web:</label>
                        <input
                            type="url"
                            id="website"
                            name="website"
                            autoComplete="off"
                            value={website}
                            onChange={(e) => handleChange(e, setWebsite)}
                        />

                        <label htmlFor="state">Estado</label>
                        <select
                            id="state"
                            name="state"
                            autoComplete="on"
                            value={clientState}
                            onChange={(e) => handleChange(e, setClientState)}
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
                            name="detail"
                            id="detail"
                            cols="45"
                            rows="1"
                            value={detail}
                            onChange={(e) => handleChange(e, setDetail)}
                        />
                    </div>
                    <div className="formSubmit">
                        <button onClick={(e) => handleSubmit(e)}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewContactForm