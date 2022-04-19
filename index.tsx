import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="loading-wrapper">
        <div className="loading">
          <div className="loading innerloader">

          </div>
        </div>
       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
