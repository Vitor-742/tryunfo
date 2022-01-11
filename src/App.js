import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import { maxPoints, maxPointsAttr } from './components/constants';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSaveButtonDisabled: true,
      inpName: '',
      inpTextarea: '',
      Força: 0,
      selectRare: 'normal',
      Velocidade: 0,
      Defesa: 0,
      inpImage: '',
      mycards: [],
      inpTrunfo: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.testaBotao = this.testaBotao.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange(event) {
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({ [event.target.id]: value }, () => this.testaBotao());
    /* console.log(this.state); */
  }

  onSaveButtonClick = () => { // descobrir pq o salvar nao volta sozinha na segunda
    const {
      inpName,
      inpImage,
      inpTextarea,
      inpTrunfo,
      Força,
      Velocidade,
      Defesa,
      selectRare,
      mycards,
    } = this.state;

    const newCard = {
      inpName,
      inpImage,
      inpTextarea,
      Força,
      Velocidade,
      Defesa,
      selectRare,
      inpTrunfo,
    };

    /* this.setState({mycards: [...this.state.mycards, newCard]}) */
    this.setState({
      isSaveButtonDisabled: true,
      inpName: '',
      inpTextarea: '',
      Força: 0,
      Velocidade: 0,
      selectRare: 'normal',
      Defesa: 0,
      inpImage: '',
      mycards: [...mycards, newCard],
      inpTrunfo: false,
    });
  }

  testaBotao() {
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
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ inpName }// fazer desse jeito com os outros ----------------------
          cardDescription={ inpTextarea }
          cardAttr1={ Força }
          cardAttr2={ Defesa }
          cardAttr3={ Velocidade }
          cardImage={ inpImage }
          cardRare={ selectRare }
          cardTrunfo={ inpTrunfo }
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
