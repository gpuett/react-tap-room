import React from 'react';

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
      <h2>Welcome to Garnett & William Taps</h2>
    </div>
  );
}

export default Header;
