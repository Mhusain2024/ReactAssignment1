// src/components/NavLinks.js
import React from 'react';

const NavLinks = () => {
  const links = [
    { id: 1, name: "Home", href: "#header-section", isActive: true },
    { id: 2, name: "About", href: "#features-section" },
    { id: 3, name: "Blog", href: "#digital-marketing-section" },
    { id: 4, name: "Testimonials", href: "#feedback-section" },
  ];

  return (
    <>
    <ul className="flex flex-col md:flex-row gap-4">
      {links.map((link) => (
        <li key={link.id} className="nav-item">
          <a
            className={`nav-link text-gray-700 hover:text-blue-500 py-2 px-4 md:py-3 md:px-6 font-semibold ${
              link.isActive ? 'active' : ''
            }`}
            href={link.href}
          >
            {link.name}
          </a>
        </li>
      ))}
        </ul>
    </>
  );
};

export default NavLinks;