import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from "react";

const  Contato = () => {
  return (
    <div>
        <h1>Contato</h1>
        <p>
            <FontAwesomeIcon icon={faEnvelope}/> Email: exemplo@email.com
        </p>
    </div>
  );
};

export default Contato;