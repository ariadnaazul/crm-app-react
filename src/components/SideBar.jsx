import React from 'react'

function SideBar({changeFormVisibility}) {
    return (
        <aside id="sidebar">
            <nav className="sidebar">
                <h2>Hola!</h2>
                <button id="openFormButton" onClick={() => changeFormVisibility()}>Nueva Persona</button>
            </nav>
        </aside>
    )
}

export default SideBar