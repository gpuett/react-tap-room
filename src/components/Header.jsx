import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
          .headerStyle {
            text-align: center
            z-index: 2;
            position: fixed;
            background-color: black;
            display: flex;
            justify-content: space-around;
            height: 8vh;
            width: 100%;
          }
          .headerStyle h1 {
            font-size: 4vh;
            line-height: 4vh;
            font-weight: 500;
            font-family: 'Eater', cursive;
          }
          .headerStyle a {
            color: white;
            font-size: 2vh;
            text-decoration: none;
            padding-top: 2vh;
          }
          .headerStyle a:hover {
            color: red;
          }
        `}</style>
      <div className="headerStyle">
        <Link to='/'>Home</Link>
        <h1>LoveCraft</h1>
        <Link to='/NewTap'>Add Keg</Link>
      </div>
    </div>
  );
}

export default Header;
