// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import './Header.css'
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <header>
        <p className='judul'>Call a Friend</p>
        <p className='subtitle'><span>Your friendly contact app</span></p>
      </header>
    </>
  );
};

export default Header;
