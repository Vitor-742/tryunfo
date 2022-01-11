import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './components/constants';

// aquela funcao e booleano , fazer outra funcao que muda ela dentro do estado

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.testaBotao = this.testaBotao.bind(this);
  }

  onInputChange(event) {
    /* this.testaBotao(); */
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({ [event.target.id]: value }, () => this.testaBotao());
    console.log(this.state);
  }

  testaBotao() {
    // tem que retornar booleano - true para inativo
    const { inpName, inpTextarea, inpImage, Força, Defesa, Velocidade } = this.state;

    const VelocidadeNum = Number(Velocidade);
    const ForçaNum = Number(Força);
    const DefesaNum = Number(Defesa);

    if (
      !inpName
      || inpName === ''
      || !inpTextarea
      || inpTextarea === ''
      || !inpImage
      || inpImage === ''
      || ForçaNum + DefesaNum + VelocidadeNum > maxPoints
      || ForçaNum > maxPointsAttr
      || DefesaNum > maxPointsAttr
      || VelocidadeNum > maxPointsAttr
      || ForçaNum < 0
      || VelocidadeNum < 0
      || DefesaNum < 0
    ) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  /* onSaveButtonClick = (event) => {
    console.log(event.target)
  } */

  // isSaveButtonDisabled

  render() {
    const {
      inpName,
      inpTextarea,
      Força,
      Defesa,
      Velocidade,
      inpImage,
      selectRare,
      inpTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <>
        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          /* onSaveButtonClick={this.onSaveButtonClick} */
        />
        <Card
          cardName={ inpName }
          cardDescription={ inpTextarea }
          cardAttr1={ Força }
          cardAttr2={ Defesa }
          cardAttr3={ Velocidade }
          cardImage={ inpImage }
          cardRare={ selectRare }
          cardTrunfo={ inpTrunfo }
        />
      </>
    );
  }
}

export default App;
