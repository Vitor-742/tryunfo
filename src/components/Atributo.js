import React from 'react';
import PropTypes from 'prop-types';

class Atributo extends React.Component {
  render() {
    const { datatestid, tipoAtrib } = this.props;

    return (
      <>
        <label htmlFor={ datatestid }>
          { tipoAtrib }
        </label>
        <input type="number" data-testid={ datatestid } id={ datatestid } />
      </>
    );
  }
}

Atributo.propTypes = {
  datatestid: PropTypes.string.isRequired,
  tipoAtrib: PropTypes.string.isRequired,
};

export default Atributo;
