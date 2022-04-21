import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}


var TIME_SLOTS = [
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
];
var midarr =TIME_SLOTS.map((item,ind)=>{
  var d1 = new Date();
  console.log("d1 val",d1);
  d1.setSeconds(0)
  if(item.includes("PM")) {
    if(item.split(":")[0] === '12') {
    d1.setHours(parseInt(item.split(":")[0])) 
    } else  {
      d1.setHours(parseInt(item.split(":")[0])+12) 
    }
  } else {
    d1.setHours(item.split(":")[0])
  }
  // item.includes("PM") ? d1.setHours(parseInt(item.split(":")[0])+12) : d1.setHours(item.split(":")[0])
  d1.setMinutes(item.split(":")[1].split(" ")[0])
  console.log("d1 val 2",d1);
  return d1
})
console.log("midarr val ",midarr)
function Semiarrayval(){
  var d2 = new Date();
  d2.setSeconds(0)
var semiarr = midarr.filter((item,ind) =>{
  console.log('semiarr', item.getHours(), d2.getHours())
  if(item.getTime()>d2.getTime()) {
    console.log('If', item.getTime(), d2.getTime())
    return item;
  } else {
    return null
  }
})
console.log("semi arr is ",semiarr)
var finalarr = semiarr.map((item,ind)=>{
    var hrs = item.getHours() > 12 ? item.getHours()-12:item.getHours();
    var str = item.getHours() > 12 ? "PM" :"AM";
    return hrs+":"+item.getMinutes()+" "+str
  })
  console.log("final arr is",finalarr)
}


class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };

    Semiarrayval();


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
