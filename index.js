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
        itens_array: List([
           1, 2, 3
        ]),
        itens_map: Map({
           item1: 'map1_value',
           item2: 'map2_value',
        }),
        itens_array_object: List([
           Map({name: 'Maria', sobrenome: 'Joana', age: 10}),
           Map({name: 'Lucas', sobrenome: 'Amorim', age: 30}),
           Map({name: 'Miguel', sobrenome: 'Torres', age: 40}),
        ]),
        candy: this.candy()
      })
    };
  }

  candy = () => {
    return 'candy';
  }

  render() {
    const {data} = this.state;
    const a0 = data.getIn(['itens_array', 0]);
    const a1 = data.getIn(['itens_map', 'item1']);
    const a2 = data.getIn(['candy']);
    const a3 = data.setIn(['itens_array', 5], 'teste');
    const a4 = data.update(
      'itens_array', itens_array => itens_array.push('a4 last')
    );
    const a5 = data.get('itens_array_object').findIndex(listing => {
      return listing.get('name') === 'Miguel';
    });

    const a6 = data.update(
      'itens_array_object',
      item => item.map(item => item.update(
        'age',
        age => age * 0.9 
      ))
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

    console.log('%c a5 - findIndex from some object', 'color: green; font-weight: bold');
    console.log(a5);

    console.log('%c a6 - update all ages from data', 'color: blue; font-weight: bold');
    console.log(a6);

    

    return (
      <div>
        <Hello name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));


//// ES6 to use with child props
// const {profile, image, age, gender} = this.props.client;
// ImmutableJS
// const profile = Immutable.get(this.props.client, 'profile');
// const image = Immutable.get(this.props.client, 'image');
// const age = Immutable.get(this.props.client, 'age');
// const gender = Immutable.get(this.props.client, 'gender');