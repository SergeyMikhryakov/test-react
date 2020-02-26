import React from 'react';

class App extends React.Component {
  state = {
    c: 0
  }

  componentDidMount() {
    this.add(16, 49);
  }

  add = (a, b) => {
    // Динамический import можно использовать даже внутри функции
    import("./math").then(math => {
      this.setState({c: math.add(a, b)});
    });
  }

  render() {

    return (
        <div>Sum = {this.state.c}</div>
    );
  }
}

export default App;
