import { Component, ReactNode } from "react";

class App extends Component {
  state = {
    numbersRandom: [],
  };

  generateNumbers = () => {
    const numbers: number[] = [];
    while (numbers.length < 36) {
      const randomNumber = Math.floor(Math.random() * 36) + 1;
      if (!numbers.includes(randomNumber)) numbers.push(randomNumber);
    }
    numbers.sort((a, b) => a - b);

    const newRandomNumbers: number[] = [];
    for (let i = 0; i < 5; i++) {
      const random = Math.floor(Math.random() * numbers.length);
      const number = numbers.splice(random, 1)[0];
      newRandomNumbers.push(number);
    }

    this.setState({
      numbersRandom: newRandomNumbers,
    });
  };

  render(): ReactNode {
    return (
      <div className="buttonNewNumbers">
        <button onClick={this.generateNumbers}>New numbers</button>
        <div className="dataLi">
          {this.state.numbersRandom.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
