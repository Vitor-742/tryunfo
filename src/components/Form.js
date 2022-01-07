import React from 'react';
import './Form.css';
import Atributo from './Atributo';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="inpName">
          <p>Força:</p>
          <input type="text" data-testid="name-input" id="inpName" />
        </label>
        <label htmlFor="inpTextarea">
          <p>Descrição:</p>
          <input
            type="textarea"
            data-testid="description-input"
            id="inpTextarea"
          />
        </label>
        <Atributo datatestid="attr1-input" tipoAtrib="Força" />
        <Atributo datatestid="attr2-input" tipoAtrib="Defesa" />
        <Atributo datatestid="attr3-input" tipoAtrib="Velocidade" />
        <label htmlFor="inpImage">
          <p>Imagem:</p>
          <input type="text" data-testid="image-input" id="inpImage" />
        </label>

        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <label htmlFor="inpTrunfo">
          <input type="checkbox" data-testid="trunfo-input" id="inpTrunfo" />
          <p>Super Trunfo</p>
        </label>
        <button type="submit" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
