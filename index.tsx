import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.scss';
// import DatePicker from 'react-date-picker';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
interface AppProps {}
interface AppState {
  name: string;
}

function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <div>
        <DatePicker minDate={new Date()} onChange={onChange} value={value} />
      </div>
    </div>
  );
}
render(<App />, document.getElementById('root'));
