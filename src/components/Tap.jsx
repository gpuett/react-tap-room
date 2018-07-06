import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  return(
    <div className='tapCard'>
      <style jsx>
        {`
          .tapCard{
            display: flex;
            background-color: grey;
            color: black;
            text-align: center;
            position: relative;
          }
          img {
            padding: 10px;
            border-radius: 15px;
            width: 340px;
            margin-left: 10px;
          }
          .imageDiv {
            width: 380px;
          }
          .imageDiv h1 h3{
            font-weight: 500;
          }
          .kegDiv {
            width: 380px;
          }
          .formDiv {
            width: 380px;
            display: flex;
            align-items: center;
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
        <p>Edit form to go here on click</p>
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
