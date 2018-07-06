import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props){
  return (
    <div>
      <style jsx>{`
        .error {
          text-align: center;
          color: white;
          padding-top: 25vh;
          display: flex;
          flex-direction: column;
        }
        .error a {
          color: red;
          text-decoration: none;
        }
      `}</style>
      <div className='error'>
        <h2>The page {props.location.pathname} does not exist!</h2>
        <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
      </div>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
