import React, { useState } from 'react';

const ContactSearchBar = ({ contacts, setSelectedContact, changeContactDetailVisibility}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

    if (newSearchTerm !== "") {
      const filteredResults = contacts.filter(contact => {
        const fullName = (contact.name + " " + contact.surname).toLowerCase();
        return fullName.includes(newSearchTerm) || contact.company.toLowerCase().includes(newSearchTerm);
      });

      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const handleItemClick = (clickedContact) => {
    setSelectedContact(clickedContact);
    changeContactDetailVisibility();
    setSearchTerm("");
    setResults([]);
  };

  return (
    <div className='search'>
      <input
        type="text"
        id="searchInput"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar..."
      />

      <ul id="searchResults">
        {results.map((contact) => (
          <li key={contact.id} onClick={() => handleItemClick(contact)}>
            {contact.name} {contact.surname} | Company: {contact.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactSearchBar;

