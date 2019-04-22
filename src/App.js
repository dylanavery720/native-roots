import React, { Component } from 'react';
import './App.css';
import { getHarvests, createNewHarvest } from './Requests/requests'
import Card from './Card/Card'
import Form from './Form/Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      harvests: [],
    };
  }

  async componentDidMount() {
    await this.getAllHarvests()
  }

  async getAllHarvests() {
    const harvests = await getHarvests()
    this.setState({ harvests })
  }

  async createHarvest(harvest) {
    await createNewHarvest(harvest)
    await this.getAllHarvests()
  }

  displayHarvests(harvests) {
    const harvestCards = harvests.map(harvest => (
      <Card
        key={harvest.id}
        harvest={harvest}
      />
    ));
    return harvestCards;
  }

  render() {
    return (
      <div className="App">
        <h1>New Harvest Form:</h1>
        <Form  createHarvest={(harvest) => this.createHarvest(harvest)}/>
        <div>
        <h1>Harvests:</h1>
        {this.displayHarvests(this.state.harvests)}
        </div>
      </div>
    );
  }
}

export default App;
