import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {
    const { plantCount, harvestLbs, date, bay, harvestLbsPerLight, classification, strain, id } = this.props.harvest;
    return (
      <div className="Card-container">
        <div className="Card">
          <p>
            Harvest: {id}
          </p>
          <p>
            Bay: {bay.id}
          </p>
          <p>
            Date: {date}
          </p>
          <p>
            Classification: {classification}
          </p>
          <p>
            Strain: {strain}
          </p>
          <p>
            Plants: {plantCount}
          </p>
          <p>
            Pounds: {harvestLbs}
          </p>
          <p>
            Pounds Per Light: {harvestLbsPerLight}
          </p>
        </div>
      </div>
    );
  }
}

export default Card;