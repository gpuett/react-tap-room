import React from 'react';
import Celestial from './../assets/images/Celestial.jpg';
import Huntsman from './../assets/images/huntsman.jpg';
import SilverLady from './../assets/images/silver-lady.jpg';
import MadOne from './../assets/images/madone.jpg';
import Tap from './Tap';



const masterKegList = [
  {
    name: 'Huntsman IIPA',
    brewer: 'Yharnam Brewing',
    abv: '6.9%',
    price: '5',
    image: Huntsman,
    remaining: '124'
  },
  {
    name: 'Cainhurst Cider',
    brewer: 'Silver Lady Orchard',
    abv: '5.2%',
    price: '4',
    image: SilverLady,
    remaining: '124'
  },
  {
    name: 'Celestial Saisson',
    brewer: 'Iosefka\'s Clinic',
    abv: '4.8%',
    price: '5',
    image: Celestial,
    remaining: '124'
  },
  {
    name: 'Mad One IIPA',
    brewer: 'Hemwick Hops',
    abv:  '8%',
    price: '6',
    image: MadOne,
    remaining: '124'
  }
];


function TapList() {
  return(
    <div className='notLoop'>
      <style jsx>
        {`
          .notLoop {
            width: 1024px;
            text-align: center;
            margin: auto;
            position: absolute;
          }
          .loop {
            border-bottom: 2px solid black;
          }
          .add {
            background-color: #FFC107;
            padding: 10px;
            border-radius: 5px;
            border: none;
            margin: 10px;
          }
          .add:hover {
            background-color: #E0A800;
          }
        `}
      </style>
      <select name="taps">
        <option value="All Taps">All Taps</option>
        <option value="ABV Over 6%">ABV Over 6%</option>
      </select>
      {masterKegList.map((tap, index) =>
        <div className='loop'>
          <Tap name={tap.name}
            brewer={tap.brewer}
            abv={tap.abv}
            price={tap.price}
            image={tap.image}
            remaining={tap.remaining}
            key={index}/>
        </div>
      )}
      <button className="add">Add Keg</button>
    </div>
  );
}

export default TapList;
