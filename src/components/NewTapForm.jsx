import React from 'react';
import { Link } from 'react-router-dom';

function NewTapForm() {
  return(
    <div>
      <style jsx>
        {`
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
            height: 30px;
            width: 300px;
          }
          a {
            color: white;
          }
        `}
      </style>
      <h1>Add New Keg</h1>
      <input type="text" class="form-control" placeholder="Name"></input>
      <br/>
      <input type="number" class="form-control" placeholder="Price"></input>
      <br/>
      <input type="text" class="form-control" placeholder="Brand"></input>
      <br/>
      <input type="number" class="form-control" placeholder="ABV"></input>
      <br/>
      <input type="text" class="form-control" placeholder="Image"></input>
      <br/>
      <button>Submit</button>
      <br/>
      <Link to="/">Home</Link>
    </div>
  );
}

export default NewTapForm;
