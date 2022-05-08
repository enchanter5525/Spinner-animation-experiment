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
// Expandable components from instagram

  render() {
    return (
     <div>
       <input type="text" list="my-list"/>
       <datalist id="my-list">
         <option value="java"/>

         <option value="javascript"/>
         <option value="c"/>
         </datalist>
         </div>)
  }
}

render(<App />, document.getElementById('root'));
