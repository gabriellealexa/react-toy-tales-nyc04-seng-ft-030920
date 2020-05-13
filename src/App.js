import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'

class App extends React.Component{

  state = {
    display: false,
    masterList: []
  }

  componentDidMount = () => {
    let url = 'http://localhost:3000/toys'
    fetch(url)
    .then(resp => resp.json())
    .then((allToys) => {
      this.setState({
        masterList: allToys
      })
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addOneToy = (newToyObj) => {
    let copyOfToy = {...newToyObj, likes: 0 }
    fetch('http://localhost:3000/toys', {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(copyOfToy)
    })
    .then(resp => resp.json())
    .then((newlyCreatedToy) => {
      let copyOfToyCollection = [...this.state.masterList, newlyCreatedToy]
      this.setState({
        masterList: copyOfToyCollection
      })
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm 
            addOneToy={this.addOneToy}
          />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
          { console.log(this.state.masterList )}
        </div>
        <ToyContainer toyList={ this.state.masterList } />
      </>
    );
  }

}

export default App;
