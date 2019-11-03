import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, List, fromJS } from 'immutable';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      data: Map({ count: 2, items: List() }),
      data1: Map({ 
        a: 2, 
        itens_array: List([
           'item1_list', 2, 3
        ]),
        itens_map: Map({
           item1: 'map1_value',
           item2: 'map2_value',
        }),
        itens_array_object: Map({
           item1: 'map1_value',
           item2: 'map2_value',
        }),
        book: this.book()
      })
    };
  }

  book = () => {
    return 'teste';
  }



  render() {
    const {data, data1} = this.state;
    const a2 = data1.getIn(['itens_array', 0]);
    const a3 = data1.getIn(['itens_map', 'item1']);
    
    console.log(data1);
    console.log(a2);
    console.log(a3);

    return (
      <div>
        <Hello name={this.state.name} />
        {this.book()}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
