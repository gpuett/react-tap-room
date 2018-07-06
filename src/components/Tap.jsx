import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){

  function sellPint() {
    props.onSellingPint(props.tapId);
  }

  return(
    <div className='tapCard'>
      <style jsx>{`
          .tapCard{
            display: flex;
            background-color: grey;
            text-align: center;
          }
          img {
            padding: 10px;
            border-radius: 15px;
            width: 340px;
            margin-left: 10px;
          }
          .imageDiv {
            width: 50%;
          }
          .kegDiv {
            padding-top: 2vh;
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .sell {
            background-color: black;
            padding: 10px;
            border-radius: 5px;
            color: white;
            border: none;
            margin: 10px;
            font-size: 16px;
            font-family: 'East Sea Dokdo', cursive;
          }
          .sell:hover {
            background-color: crimson;
            cursor: pointer;
          }
        `}</style>
      <div className="imageDiv">
        <h1>Name: {props.name}</h1>
        <img src={props.image}></img>
      </div>
      <div className="kegDiv">
        <h1>Price: ${props.price}</h1>
        <h3>{props.brewer}</h3>
        <h3>ABV: {props.abv}%</h3>
        <h3>Pints Remaining: {props.remaining}</h3>
        <button className="sell" onClick={sellPint}>Sell Pint</button>
      </div>
    </div>
  );
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  remaining: PropTypes.number.isRequired,
  tapId: PropTypes.number.isRequired,
  onSellingPint: PropTypes.func,
  selectedTap: PropTypes.string
};

export default Tap;
