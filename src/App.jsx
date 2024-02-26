import React, { useState } from 'react'
import SideBar from './components/SideBar'
import NewContactForm from './components/NewContactForm'
import ContentBoard from './components/ContentBoard';
import ContactCard from './components/ContactCard';
import { nanoid } from "nanoid";
import ContactSearchBar from './components/ContactSearchBar';
import ContactStateFilter from './components/ContactStateFilter';
import ContactDetailModal from './components/ContactDetailModal';
import MessageBox from './components/MessageBox';


function App({ contactsData }) {

  //Visibilidad de los Modal
  const [formVisibility, setFormVisibility] = useState("none");
  const [contactDetailVsibility, setContactDetailVisibility] = useState("none");
  const [msgBoxVisibility, setMsgBoxVisibility] = useState ("none")

  const changeFormVisibility = () => {
    setFormVisibility((formVisibility) => (formVisibility === "block" ? "none" : "block"));
  }

  const changeContactDetailVisibility = () => {
    setContactDetailVisibility((contactDetailVsibility) => (contactDetailVsibility === "block" ? "none" : "block"));
  }

  const changeMsgBoxVisibility = () => {
    setMsgBoxVisibility((msgBoxVisibility) => (msgBoxVisibility === "block" ? "none" : "block"));
  }


  //Contact Detail
  const [selectedContact, setSelectedContact] = useState(null);

  function handleContactClick(contactId) {
    const selected = contacts.find((contact) => contact === contactId);
    setSelectedContact(selected);
  };


  //Añadir contactos
  const [contacts, setContacts] = useState([]);

  const addContact = (name, surname, company, email, phoneNumber, address, website, detail, clientState) => {
    const newContact = { id: `contact-${nanoid()}`, name: name, surname: surname, company: company, email: email, phoneNumber: phoneNumber, address: address, website: website, detail: detail, clientState: clientState }
    setContacts([...contacts, newContact]);
  }


  //Filtrar Contactos
  const [selectedState, setSelectedState] = useState("Todos");

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const filterContacts = () => {
    if (selectedState === "Todos") {
      return contacts;
    } else {
      return contacts.filter((contact) => contact.clientState === selectedState);
    }
  };


  //Lista de Contactos filtrada
  const contactsList = filterContacts()
    .map((contact) => (
      <ContactCard //Recibe las propiedades de cada contacta almacenada en 'filterContacts' como props
        contact={contact}
        key={contact.id}
        changeContactDetailVisibility={changeContactDetailVisibility}
        setSelectedContact={setSelectedContact}
      />
    ));


  //ContactDetail: Actualiza los datos de contacto
  const updateContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };


  //Eliminar contacto
  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContacts);
  };

  console.log(selectedContact);

  return (
    <>
      <SideBar
        changeFormVisibility={changeFormVisibility}
      />
      <NewContactForm
        formVisibility={formVisibility}
        changeFormVisibility={changeFormVisibility}
        addContact={addContact}
      />
      <ContentBoard
        contactsList={contactsList} //contactCardElement se imprime en el 'ContentBoardElement' a través 'contactsList' 
      >
        <ContactSearchBar
          contacts={contacts}
          setSelectedContact={setSelectedContact}
          changeContactDetailVisibility={changeContactDetailVisibility}
        />
        <ContactStateFilter
          selectedState={selectedState}
          handleStateChange={handleStateChange}
        />
      </ContentBoard>
      <ContactDetailModal
        contactDetailVsibility={contactDetailVsibility}
        changeContactDetailVisibility={changeContactDetailVisibility}
        selectedContact={selectedContact}
        updateContact={updateContact}
        deleteContact={deleteContact}
        changeMsgBoxVisibility={changeMsgBoxVisibility}
      />
      <MessageBox
        msgBoxVisibility={msgBoxVisibility}
        changeMsgBoxVisibility={changeMsgBoxVisibility}
        msgText={"Esta acción eliminará a la persona y todos sus datos. ¿Estás seguro que deseas continuar?"}
        selectedContact={selectedContact}
        deleteContact={deleteContact}
        changeContactDetailVisibility={changeContactDetailVisibility}
      />
    </>
  )
}

export default App