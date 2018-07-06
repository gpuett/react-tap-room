import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import TapList from './TapList';
import Header from './Header';
import NewTapForm from './NewTapForm';
import Celestial from './../assets/images/Celestial.jpg';
import Huntsman from './../assets/images/huntsman.jpg';
import SilverLady from './../assets/images/silver-lady.jpg';
import MadOne from './../assets/images/madone.jpg';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      masterTapList:
        [
          {
            name: 'Huntsman IIPA',
            brewer: 'Yharnam Brewing',
            abv: '6.9',
            price: '5',
            image: Huntsman,
            remaining: 124
          },
          {
            name: 'Cainhurst Cider',
            brewer: 'Silver Lady Orchard',
            abv: '5.2',
            price: '4',
            image: SilverLady,
            remaining: 124
          },
          {
            name: 'Celestial Saisson',
            brewer: 'Iosefka\'s Clinic',
            abv: '4.8',
            price: '5',
            image: Celestial,
            remaining: 124
          },
          {
            name: 'Mad One IIPA',
            brewer: 'Hemwick Hops',
            abv:  '8',
            price: '6',
            image: MadOne,
            remaining: 124
          }
        ]
    };
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
    this.handleChangingSelectedTap = this.handleAddingNewTapToList.bind(this);
    this.handleSellingPint = this.handleSellingPint.bind(this);
  }

  handleAddingNewTapToList(newTap){
    let newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newTap);
    this.setState({masterTapList: newMasterTapList});
  }

  handleChangingSelectedTap(tapId){
    this.setState({selectedTap: tapId});
  }

  handleSellingPint(selectedTap){
    let updatedMasterTapList = this.state.masterTapList.slice();
    for (var i = 0; i < updatedMasterTapList.length; i++) {
      if (i === selectedTap) {
        if (updatedMasterTapList[selectedTap].remaining > 0) {
          updatedMasterTapList[selectedTap].remaining -= 1;
        }
      }
    }
    this.setState({masterTapList: updatedMasterTapList});
  }

  render(){
    return (
      <div>
        <style jsx global>{`
          body {
            background-image: url('https://images5.alphacoders.com/548/thumb-1920-548706.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
            background-color: black;
            color: white;
            align-items: center;
            margin: auto;
            font-family: 'East Sea Dokdo', cursive;
          }
          `}</style>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' render={()=><TapList
              tapList={this.state.masterTapList}
              onTapSelection={this.handleChangingSelectedTap}
              selectedTap={this.state.selectedTap}
              onSellingPint={this.handleSellingPint}/>} />
            <Route path="/NewTap" render={()=> <NewTapForm
              onNewTapCreation={this.handleAddingNewTapToList}/>} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
