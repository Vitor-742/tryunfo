import React from 'react';
import PropTypes from 'prop-types';

class Atributo extends React.Component {
  render() {
    const { datatestid, tipoAtrib, cardAttr, onInputChange } = this.props;

    return (
      <>
        <label htmlFor={ datatestid }>{ tipoAtrib }</label>
        <input
          type="number"
          data-testid={ datatestid }
          id={ datatestid }
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
