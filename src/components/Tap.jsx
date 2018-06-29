import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  return(
    <div className='tapCard'>
      <style jsx>
        {`
          .tapCard{
            display: flex;
            background-color: lightgreen;
            color: black;
            text-align: center;
            position: relative;
          }
          img {
            padding: 10px;
            border-radius: 15px;
            width: 270px;
          }
          .imageDiv {
            width: 340px;
          }
          .kegDiv {
            width: 340px;
          }
          .formDiv {
            width: 340px;
          }
          .sell {
            background-color: #17A2B8;
            padding: 10px;
            border-radius: 5px;
            color: white;
            border: none;
            margin: 10px;
          }
          .edit {
            background-color: #DC3545;
            padding: 10px;
            border-radius: 5px;
            color: white;
            border: none;
            margin: 10px;
          }
        `}
      </style>
      <div className="imageDiv">
        <h1>Price: ${props.price}</h1>
        <h3>Name: {props.name}</h3>
        <img src={props.image}></img>
      </div>
      <div className="kegDiv">
        <h4>{props.brewer}</h4>
        <p>{props.abv}</p>
        <p>Pints Remaining: {props.remaining}</p>
        <button className="sell">Sell Pint</button>
        <br></br>
        <button className="edit">Edit</button>
      </div>
      <div className="formDiv">

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
  remaining: PropTypes.string.isRequired
};

export default Tap;
