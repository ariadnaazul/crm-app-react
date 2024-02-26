import React from 'react'

function ContentBoard({ contactsList, children }) {
  


  return (
    <section id="contentBoard">
      <nav className="searchBar">
        {children}
      </nav>
      <div id="peopleContainer">
        {contactsList}
      </div>
    </section>
  )
}

export default ContentBoard