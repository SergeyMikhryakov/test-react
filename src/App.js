import React, {Suspense} from 'react';
const OtherComponent = React.lazy(() => import ('./OtherComponent'));

class App extends React.Component {
  state = {
    c: 0,
    showOtherComponent: false,
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

  toggleOtherComponent = () => this.setState({showOtherComponent: !this.state.showOtherComponent});

  render() {

    return (
        <div>
          <div>Sum = {this.state.c}</div>
          <button onClick={this.toggleOtherComponent}>Toggle other component</button>

          {this.state.showOtherComponent && (
              <Suspense fallback={<div>Загрузка...</div>}>
                <OtherComponent/>
              </Suspense>
          )}
        </div>
    );
  }
}

export default App;
