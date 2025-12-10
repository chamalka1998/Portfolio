import React from "react";

function Footer() {
  return (
    <footer className="p-6 bg-gray-800 text-white text-center">
      &copy; {new Date().getFullYear()} Chamalka Deshan. All rights reserved.
    </footer>
  );
}

export default Footer;
