import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';
import Atributo from './Atributo';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="inpName">
          <p>Nome:</p>
          <input
            type="text"
            data-testid="name-input"
            id="inpName"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
          />
        </label>
        <label htmlFor="inpTextarea">
          <p>Descrição:</p>
          <input
            type="textarea"
            data-testid="description-input"
            id="inpTextarea"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
          />
        </label>
        <Atributo
          datatestid="attr1-input"
          tipoAtrib="Força"
          cardAttr={ cardAttr1 }
          onInputChange={ onInputChange }
          name="cardAttr1"
        />
        <Atributo
          datatestid="attr2-input"
          tipoAtrib="Defesa"
          cardAttr={ cardAttr2 }
          onInputChange={ onInputChange }
          name="cardAttr2"
        />
        <Atributo
          datatestid="attr3-input"
          tipoAtrib="Velocidade"
          cardAttr={ cardAttr3 }
          onInputChange={ onInputChange }
          name="cardAttr3"
        />
        <label htmlFor="inpImage">
          <p>Imagem:</p>
          <input
            type="text"
            data-testid="image-input"
            id="inpImage"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
          />
        </label>

        <select
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          id="selectRare"
          name="cardRare"
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        { hasTrunfo === false && (
          <label htmlFor="inpTrunfo">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="inpTrunfo"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            <p>Super Trunfo</p>
          </label>)}
        { hasTrunfo === true && <p>Você já tem um Super Trunfo em seu baralho</p>}
        <button
          type="button" // type pode ser submit
          data-testid="save-button"
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
