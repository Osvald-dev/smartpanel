import React from 'react';
import { Link } from 'react-router-dom';
import './utils.css';
export const Buttons = () => {

    return (
        < >
           <h4 className="text-center">Conocé todos nuestros modelos</h4>
            <div className="navigation-buttons">
                <Link to="/modelos/doshabitaciones" className="btn btn-primary-hb mx-2">Dos Habitaciones</Link>
                <Link to="/modelos/treshabitaciones" className="btn btn-primary-hb mx-2">Tres Habitaciones</Link>
                <Link to="/modelos/duplex" className="btn btn-primary-hb mx-2">Duplex</Link>
            </div>
        </>
    );
};


