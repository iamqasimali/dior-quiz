import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4">
      <p className="text-sm text-gray-700 py-2">© 2024 Tous droits réservés.</p>
      <p className="text-sm text-gray-700 underline cursor-pointer py-2">
        <Link to="/privacy-policy">Les politiques de confidentialité</Link>
      </p>
      <p className="text-sm text-gray-700 cursor-pointer">Sweepstakes Disclaimer +</p>
    </footer>
  );
}

export default Footer;
