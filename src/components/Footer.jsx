import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-4">
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="mb-2">© 2024 Swiggy. All rights reserved.</p>
        <p>
          <a href="#" className="hover:text-[#fc8019] mx-2">Privacy Policy</a>
          |
          <a href="#" className="hover:text-[#fc8019] mx-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
