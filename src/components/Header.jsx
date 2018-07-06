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
          .headerStyle h1 {
            font-size: 40px;
            line-height: 40px;
            font-weight: 500;
            font-family: 'Eater', cursive;
          }
          .directory {
            background-color: black;
            display: flex;
            justify-content: space-around;
            height: 40px;
            align-items: center;
          }
          .directory a {
            color: white;
            font-family: 'Eater', cursive;
            font-size: 20px;
            text-decoration: none;
          }
        `}
      </style>
      <div className='directory'>
        <Link to='/'>Home</Link>
        <Link to='/NewTap'>Add Keg</Link>
      </div>
      <h1>LoveCraft</h1>
    </div>
  );
}

export default Header;
