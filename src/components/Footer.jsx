import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#7E57C2', padding: '10px', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} JL Infinity.</p>
    </footer>
  );
}

export default Footer;
