import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NewTapForm(props) {
  let _name = null;
  let _price = null;
  let _brand = null;
  let _abv = null;
  let _image = null;
  let _remaining = 124;

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({name: _name.value, price: _price.value, brand: _brand.value, abv: _abv.value, image: _image.value, remaining: 124});
    _name.value = '';
    _price.value = '';
    _brand.value = '';
    _abv.value = '';
    _image.value = '';
  }
  return(
    <div>
      <style jsx>{`
          div {
            text-align: center;
          }
          button {
            background-color: #DC3545;
            padding: 10px;
            border-radius: 5px;
            color: white;
            border: none;
            margin: 10px;
            font-size: 16px;

          }
          button:hover {
            background-color: #C82333;
            cursor: pointer;
          }
          input {
            height: 40px;
            width: 300px;
          }
          a {
            color: white;
          }
        `}</style>
      <h1>Add New Keg</h1>
      <form onSubmit={handleNewTapFormSubmission}>
        <input
          type="text" class="form-control" placeholder="Name" required
          ref={(input) => {_name = input;}}/>
        <br/>
        <input
          type="number" class="form-control" placeholder="Price" required
          ref={(input) => {_price = input;}}/>
        <br/>
        <input
          type="text" class="form-control" placeholder="Brand" required
          ref={(input) => {_brand = input;}}/>
        <br/>
        <input
          type="number" class="form-control" placeholder="ABV" required
          ref={(input) => {_abv = input;}}/>
        <br/>
        <input
          type="text" class="form-control" placeholder="Image"
          ref={(input) => {_image = input;}}/>
        <br/>
        <button type='submit'>Submit</button>
        <br/>
      </form>
    </div>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;
