import React, { useState } from 'react'

function ContactStateFilter({ selectedState, handleStateChange}) {

    


    return (
        <div>
            <div className="stateFilter">
                <select id="stateFilter" value={selectedState} onChange={handleStateChange}>
                    <option value="Todos">Todos</option>
                    <option value="Cliente Potencial">Clientes Potenciales</option>
                    <option value="Envío de propuesta">Envío de Propuestas</option>
                    <option value="Negociación">Negociaciones</option>
                    <option value="Cierre de venta">Cierre de Ventas</option>
                    <option value="Activo">Activos</option>
                    <option value="Inactivo">Inactivos</option>
                    <option value="Cliente Recurrente">Clientes Recurrentes</option>
                </select>
            </div>
        </div>
    );
};
export default ContactStateFilter