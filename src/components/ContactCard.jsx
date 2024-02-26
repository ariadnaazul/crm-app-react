import React from 'react'

function contactCard({ contact, changeContactDetailVisibility, setSelectedContact }) {

  const handleClick = () => {
    setSelectedContact(contact);
    changeContactDetailVisibility();
  }

  return (
    <div className='contactCard' onClick={handleClick}>
      <p><b>{contact.name} {contact.surname}</b></p>
      <p><span>Empresa: </span>{contact.company}</p>
      <p><span>Email: </span>{contact.email}</p>
      <p><span>Tel.: </span>{contact.phoneNumber}</p>
      <p><span>Dirección: </span>{contact.address}</p>
      <p><span>Website: </span>{contact.website}</p>
      <p><span>Estado: </span>{contact.clientState}</p>
    </div>
  )
}

export default contactCard