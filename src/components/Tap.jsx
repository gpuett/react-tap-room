import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){

  return(
    <div className='tapCard'>
      <style jsx>{`
          .tapCard{
            display: flex;
            background-color: grey;
            text-shadow: 4px 3px black;
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
            width: 50%;
          }
          .sell {
            background-color: #17A2B8;
            padding: 10px;
            border-radius: 5px;
            color: white;
            border: none;
            margin: 10px;
            font-size: 16px;
          }
          .sell:hover {
            background-color: #138496;
            cursor: pointer;
          }
          .edit {
            background-color: #DC3545;
            padding: 10px;
            border-radius: 5px;
            color: white;
            border: none;
            margin: 10px;
            font-size: 16px;
          }
          .edit:hover {
            background-color: #C82333;
            cursor: pointer;
          }
        `}</style>
      <div className="imageDiv">
        <h1>Price: ${props.price}</h1>
        <h3>Name: {props.name}</h3>
        <img src={props.image}></img>
      </div>
      <div className="kegDiv">
        <h3>{props.brewer}</h3>
        <h3>ABV: {props.abv}%</h3>
        <h3>Pints Remaining: {props.remaining}</h3>
        <button className="sell" onClick={props.handleSellingPint}>Sell Pint</button>
        <br></br>
        <button className="edit">Edit</button>
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
  handleSellingPint: PropTypes.func
};

export default Tap;
