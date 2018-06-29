import React from 'react';

function Header(){
  return (
    <div className="headerStyle">
      <style jsx>
        {`
          .headerStyle {
            text-align: center
          }
          .headerStyle h1 {
            font-size: 40px;
            line-height: 40px;
            font-weight: 500;
          }
          .headerStyle h2 {
            font-size: 28px;
            line-height: 30px;
            font-weight: 500;
          }
        `}
      </style>
      <h1>LoveCraft</h1>
      <h2>Welcome to Garnett & William Taps!</h2>
    </div>
  );
}

export default Header;
