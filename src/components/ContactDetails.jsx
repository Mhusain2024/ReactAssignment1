// src/components/ContactDetails.js
import React from 'react';
import { Icon } from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiLinkedin } from '@mdi/js';

const ContactDetails = () => {
  return (
    <section className="contact-details py-16 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Address */}
          <div className="text-center md:text-left">
            <img 
              src="assets/Group2.svg" 
              alt="Logo" 
              className="w-30 h-30 mx-auto md:mx-0 mb-4"
            />
            <p className="text-gray-700">mikayla_beer@feil.name</p>
            <p className="text-gray-700">906-179-8309</p>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-bold mb-4">Get in Touch</h5>
            <p className="text-gray-700 mb-4">
              Don’t miss any updates of our new templates and extensions.!
            </p>
            <input 
              type="email" 
              placeholder="Email id" 
              className="border p-2 w-full mb-4"
            />
            <button className="bg-black text-white py-2 px-4 rounded">
              Subscribe
            </button>
          </div>

          {/* Guidelines */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-bold mb-4">Our Guidelines</h5>
            <a href="#" className="block text-gray-700 mb-2">Terms</a>
            <a href="#" className="block text-gray-700 mb-2">Privacy policy</a>
            <a href="#" className="block text-gray-700 mb-2">Cookie Policy</a>
            <a href="#" className="block text-gray-700">Discover</a>
          </div>

          {/* Address and Social Media */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-bold mb-4">Our address</h5>
            <p className="text-gray-700 mb-4">
              518 Schmeler Neck<br />
              Bartlett, Illinois
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-black hover:opacity-75 transition-opacity"> <Icon path={mdiFacebook} size={1} /></a>
              <a href="#" className="text-black hover:opacity-75 transition-opacity"><Icon path={mdiTwitter} size={1} /></a>
              <a href="#" className="text-black hover:opacity-75 transition-opacity"><Icon path={mdiInstagram} size={1} /></a>
              <a href="#" className="text-black hover:opacity-75 transition-opacity"><Icon path={mdiLinkedin} size={1} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;