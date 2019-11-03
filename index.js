//https://thomastuts.com/blog/immutable-js-101-maps-lists.html
//https://github.com/immutable-js/immutable-fromJS
//https://www.freecodecamp.org/news/immutable-js-is-intimidating-heres-how-to-get-started-2db1770466d6/


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
      data: Map({ 
        a: 2, 
        itens_array: List([
           1, 2, 3
        ]),
        itens_map: Map({
           item1: 'map1_value',
           item2: 'map2_value',
        }),
         itens_map2: Map({
           name: 'Joao',
           name: 'Maria',
           name: 'Lucia',
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
    const {data} = this.state;
    const a0 = data.getIn(['itens_array', 0]);
    const a1 = data.getIn(['itens_map', 'item1']);
    const a2 = data.getIn(['book']);
    const a3 = data.setIn(['itens_array', 5], 'teste');
    const a4 = data.update(
      'itens_array', itens_array => itens_array.push('a4 last')
    );

    

    
    
    console.log('%c Initial Data', 'color: green; font-weight: bold');
    console.info(data);

    console.log('%c a0 - get item array', 'color: green; font-weight: bold');
    console.log(a0);

    console.log('%c a1  - get item object', 'color: green; font-weight: bold');
    console.log(a1);

    console.log('%c a2 - get item function', 'color: green; font-weight: bold');
    console.log(a2);

    console.log('%c a3 - update data with setIn function', 'color: blue; font-weight: bold');
    console.log(a3);

    console.log('%c a4 - update data with push function', 'color: blue; font-weight: bold');
    console.log(a4);

    

    return (
      <div>
        <Hello name={this.state.name} />
        {this.book()}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));