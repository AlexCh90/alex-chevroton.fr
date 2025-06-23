// src/components/LegalModal.js
import React from 'react';
import '../assets/styles/legalmodal.scss';

const LegalModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="legal-modal-overlay" onClick={onClose}>
      <div className="legal-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Mentions légales</h2>
        <p>
          Ce site est édité par : MonSite<br/>
          Adresse : 123 rue de l’exemple, 75000 Paris<br/>
          Téléphone : 01 23 45 67 89<br/>
          Email : contact@monsite.com
        </p>
        <p>
          Hébergeur : OVH – 2 rue Kellermann – 59100 Roubaix – France<br/>
          Directeur de la publication : Nom du responsable
        </p>
        <p>
          Le contenu du site est protégé par les lois en vigueur sur la propriété intellectuelle.
        </p>
      </div>
    </div>
  );
};

export default LegalModal;