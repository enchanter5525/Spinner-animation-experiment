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
     <div className="expandable-container">
       <input type='checkbox' id="check-input" className="check-input"/>
       <label htmlFor="check-input" className="expandable">
        <header className="header-container">
          <div className="header">
            <h4 className="title">Expandable Widget</h4>
            <span className="subtitle">HTML and CSS</span>

          </div>
          <span className="icon"></span>
        </header>
        <p className="content">
          lorem ipsum df fdjhfjdf dfhdhfm fdhjfdnf fdfkdf dfdf fdnfkdjfkd dsfhdjfldshfldshfldshilfufg;ahglfdughlfgh;hg;girh gr girgirg g righ ir gir girgirhgi r girg irg ior griog irg iorg ior gior gjior goi giro ghuirghuiaggr;h g;re gr g
          gr grigirg ior grg
          rg rr;gr'
          
        </p>
       </label>

     </div>
    );
  }
}

render(<App />, document.getElementById('root'));
