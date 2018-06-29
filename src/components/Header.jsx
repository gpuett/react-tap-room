import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="headerStyle">
      <style jsx>
        {`
          .headerStyle {
            text-align: center
          }
        `}
      </style>
      <h1>LoveCraft</h1>
      <h3>Welcome to Garnett & William Taps</h3>
    </div>
  );
}

export default Header;
