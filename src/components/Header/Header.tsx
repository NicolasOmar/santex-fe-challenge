import React from 'react';
import './Header.css'

interface HeaderProps {
  logoSrc: string
  subTotalAmount: number
}

const Header: React.FC<HeaderProps> = ({ logoSrc, subTotalAmount }) => {
  return (
    <header className='header'>
      <img
        src={logoSrc}
        alt="logo"
      />
      <section>
        {`$${subTotalAmount}`}
      </section>
    </header>
  );
}

export default Header