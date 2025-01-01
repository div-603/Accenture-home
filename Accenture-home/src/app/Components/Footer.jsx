import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold cursor-pointer hover:text-gray-300 mb-4">
          ACCENTURE
        </h2>
        <div className="flex space-x-4 mb-4">
          <a href="https://www.accenture.com/us-en/careers" className="hover:text-gray-300">Careers</a>
          <span className="mx-4 text-gray-400">|</span>
          <a href="https://www.accenture.com/us-en/about/company-index" className="hover:text-gray-300">About</a>
          <span className="mx-4 text-gray-400">|</span>
          <a href="https://www.accenture.com/us-en/services/technology/application-services" className="hover:text-gray-300">Services</a>
          <span className="mx-4 text-gray-400">|</span>
          <a href="https://www.accenture.com/us-en/about/contact-us" className="hover:text-gray-300">Contact</a>
        </div>
        <p className="text-gray-400">© 2023 Accenture. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
