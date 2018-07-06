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
            width: 60%;
            padding-top: 8vh;
          }
          .loop {
            border-bottom: 2px solid black;
          }
        `}</style>
      {props.tapList.map((tap, tapId) =>
        <div className='loop'>
          <Tap name={tap.name}
            brewer={tap.brewer}
            abv={tap.abv}
            price={tap.price}
            image={tap.image}
            remaining={tap.remaining}
            key={tapId}
            tapId={tapId}
            onSellingPint={props.onSellingPint}
            onTapSelection={props.onTapSelection}
            selectedTap={props.selectedTap}/>
        </div>
      )}
      <br/>
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onSellingPint: PropTypes.func,
  onTapSelection: PropTypes.func,
  selectedTap: PropTypes.string
};

export default TapList;
