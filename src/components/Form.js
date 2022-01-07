import React from 'react'
import './From.css'
import Atributo from './Atributo.js'

class Form extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="inpName">Nome: </label>
                <input type="text" data-testid="name-input" id="inpName"></input>
                <label htmlFor="inpTextarea">Descrição: </label>
                <input type="textarea" data-testid="description-input" id="inpTextarea"></input>
                <Atributo datatestid="attr1-input" tipoAtrib="Força" />
                <Atributo datatestid="attr2-input" tipoAtrib="Defesa" />
                <Atributo datatestid="attr3-input" tipoAtrib="Velocidade" />
                <label htmlFor="inpImage">Imagem: </label>
                <input type="text" data-testid="image-input" id="inpImage"></input>
                <select data-testid="rare-input">
                    <option>normal</option>
                    <option>raro</option>
                    <option>muito raro</option>
                </select>
                <input type="checkbox" data-testid="trunfo-input" id="inpTrunfo"></input>
                <label htmlFor="inpTrunfo">Super Trunfo</label>
                <button data-testid="save-button">Salvar</button>
            </form>
            
        )
    }
}

export default Form