import React from 'react';
import PropTypes from 'prop-types';

class Atributo extends React.Component {
  render() {
    const { datatestid, tipoAtrib, cardAttr, onInputChange } = this.props;

    return (
      <>
        <label htmlFor={ tipoAtrib }>{ tipoAtrib }</label>
        <input
          type="number"
          min="0"
          data-testid={ datatestid }
          id={ tipoAtrib }
          value={ cardAttr }
          onChange={ onInputChange }
        />
      </>
    );
  }
}

Atributo.propTypes = {
  datatestid: PropTypes.string.isRequired,
  tipoAtrib: PropTypes.string.isRequired,
  cardAttr: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Atributo;
