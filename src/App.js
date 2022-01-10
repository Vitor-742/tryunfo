import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({ [event.target.id]: value });
    console.log(this.state);
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
    } = this.state;

    return (
      <>
        <Form onInputChange={ this.onInputChange } />
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
