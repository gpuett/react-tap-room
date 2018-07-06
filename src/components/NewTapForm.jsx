import React from 'react';
import PropTypes from 'prop-types';

function NewTapForm(props) {
  let _name = null;
  let _price = null;
  let _brewer = null;
  let _abv = null;
  let _image = null;

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({name: _name.value, price: _price.value, brewer: _brewer.value, abv: _abv.value, image: _image.value, remaining: 124});
    _name.value = '';
    _price.value = '';
    _brewer.value = '';
    _abv.value = '';
    _image.value = '';
  }
  return(
    <div>
      <style jsx>{`
          form {
            text-align: center;
            padding-top: 8vh;
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
            width: 20vw;
          }
          a {
            color: white;
          }
        `}</style>
      <form onSubmit={handleNewTapFormSubmission}>
        <h1>Add New Keg</h1>
        <input
          type="text" placeholder="Name" required
          ref={(input) => {_name = input;}}/>
        <br/>
        <input
          type="number" placeholder="Price" required
          ref={(input) => {_price = input;}}/>
        <br/>
        <input
          type="text" placeholder="Brewer" required
          ref={(input) => {_brewer = input;}}/>
        <br/>
        <input
          type="number" placeholder="ABV" required
          ref={(input) => {_abv = input;}}/>
        <br/>
        <input
          type="text" placeholder="Image"
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
