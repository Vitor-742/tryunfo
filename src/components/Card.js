import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare = '.normal',
      cardTrunfo,
    } = this.props;

    return (
      <div className="card">
        <h3 data-testid="name-card">{ cardName }</h3>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{`Força: ${cardAttr1}`}</p>
        <p data-testid="attr2-card">{`Defesa: ${cardAttr2}`}</p>
        <p data-testid="attr3-card">{`Velocidade: ${cardAttr3}`}</p>
        <p data-testid="rare-card">{`Raridade: ${cardRare}`}</p>
        {console.log(cardTrunfo)}
        {cardTrunfo === true && <p data-testid="trunfo-card">Super Trunfo</p>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
