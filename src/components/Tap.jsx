import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  return(
    <div className='tapCard'>
      <style jsx>
        {`
          .tapCard{
            display: flex;
            background-color: green;
          }
        `}
      </style>
      <div>
        <h2>Price: ${props.price}</h2>
        <h3>Name: {props.name}</h3>
        <img src={props.image}></img>
      </div>
      <div>
        <h4>{props.brewer}</h4>
        <p>{props.abv}</p>
        <p>Pints Remaining: {props.remaining}</p>
        <button>Sell Pint</button>
        <br></br>
        <button>Edit</button>
      </div>
      <div></div>
      
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
