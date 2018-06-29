import React from 'react';
import { Link } from 'react-router-dom';


const state = {
  masterKegList: [
    {
      name: 'Huntsman IIPA',
      brewer: 'Yharnam Brewing',
      abv: '6.9%',
      price: '5',
      remaining: '124'
    },
    {
      name: 'Cainhurst Cider',
      brewer: 'Silver Lady Orchard',
      abv: '5.2%',
      price: '4',
      remaining: '124'
    },
    {
      name: 'Celestial Saisson',
      brewer: 'Iosefka\'s Clinic',
      abv: '4.8%',
      price: '5',
      remaining: '124'
    },
    {
      name: 'Mod One IIPA',
      brewer: 'Hemwick Hops',
      abv:  '8%',
      price: '6',
      remaining: '124'
    }
  ]
}

function TapList() {
  return(
    <div>
      <p>Taplist works!</p>
      {/* <img src={background}></img> */}
    </div>
  );
}

export default TapList;
