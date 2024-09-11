import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Quiz App. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-200">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
