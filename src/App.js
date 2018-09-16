import React, { Component } from "react";
import FlameChart from "./FlameChart";
import AutoSizer from "react-virtualized-auto-sizer";
import "./App.css";

class App extends Component {
  state = {
    data: null
  };
  loadData = () => {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  };
  render() {
    const { data } = this.state;
    if (data === null) {
      return <button onClick={this.loadData}>Load data</button>;
    }
    return (
      <div className="App">
        <AutoSizer>
          {({ height, width }) => (
            <FlameChart data={data} height={height} width={width} />
          )}
        </AutoSizer>
      </div>
    );
  }
}

export default App;
