import React, { Component } from 'react';

class Card extends Component {
    constructor(){
        super()
        this.state = {
                plantCount: '',
                harvestGrams: '',
                totalPlantGrams: '',
                classification: '',
                strain: '',
                bay: '',
            }
    }


  render() {
    const {plantCount, harvestGrams, totalPlantGrams, classification, strain, bay} = this.state
    return (
        <div>
                <div className="flex flex-column mt3">
                <input
                        className="mb2"
                        value={plantCount}
                        onChange={e => this.setState({ plantCount: e.target.value })}
                        type="text"
                        placeholder="Plant count of harvest"
                    />
                    <input
                        className="mb2"
                        value={harvestGrams}
                        onChange={e => this.setState({ harvestGrams: e.target.value })}
                        type="text"
                        placeholder="Harvest in Grams"
                    />
                    <input
                        className="mb2"
                        value={totalPlantGrams}
                        onChange={e => this.setState({ totalPlantGrams: e.target.value })}
                        type="text"
                        placeholder="Plant weight in grams"
                    />
                    <input
                        className="mb2"
                        value={classification}
                        onChange={e => this.setState({ classification: e.target.value })}
                        type="text"
                        placeholder="REC OR MED"
                    />
                    <input
                        className="mb2"
                        value={strain}
                        onChange={e => this.setState({ strain: e.target.value })}
                        type="text"
                        placeholder="Strain"
                    />
                    <input
                        className="mb2"
                        value={bay}
                        onChange={e => this.setState({ bay: e.target.value })}
                        type="text"
                        placeholder="nw615"
                    />
                </div>
                     <button onClick={() => this.props.createHarvest({plantCount, harvestGrams, totalPlantGrams, classification, strain, bay})}>Submit</button>
            </div>
    );
  }
}

export default Card;