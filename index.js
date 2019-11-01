import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, List } from 'immutable';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      data: Map({ count: 2, items: List() }),
      data1: Map({ a: 2, items: List() }),
    };
  }


  render() {
    const {data, data1} = this.state;
    return (
      <div>
        <Hello name={this.state.name} />
        Count: {data.get('count')}
        Count: {data1.get('a')}
        
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
