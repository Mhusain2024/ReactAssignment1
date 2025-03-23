// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t py-4 text-center">
      Copyright © 2019{' '}
      <a href="https://www.bootstrapdash.com/" className="text-red-500 hover:text-red-700">
        Bootstrapdash.
      </a>{' '}
      All rights reserved. Distributed by{' '}
      <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
        ThemeWagon
      </a>.
    </footer>
  );
};

export default Footer;