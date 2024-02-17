import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <nav>
        <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
      </nav>
    </footer>
  );
};

const footerStyle = {
  position: 'absolute',
  bottom: '0%',
  width: '100%',
  backgroundColor: 'lightBlue',
  color: 'black',
  padding: '1rem',
  textAlign: 'center',
};

export default Footer;
