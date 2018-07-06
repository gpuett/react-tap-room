import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props) {
  return(
    <div className='notLoop'>
      <style jsx>{`
          .notLoop {
            width: 1024px;
            text-align: center;
            margin: 0 auto;
            position: relative;
            width: 60%;
          }
          .loop {
            border-bottom: 2px solid black;
          }
        `}</style>
      {props.tapList.map((tap, index) =>
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
      <br/>
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default TapList;
