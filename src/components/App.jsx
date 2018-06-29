import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import TapList from './TapList';
import Header from './Header';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TapList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
