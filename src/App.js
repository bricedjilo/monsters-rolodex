<<<<<<< HEAD
import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

import "./App.css";
=======
import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

>>>>>>> e8db0a34a9ac01fe97968d2845aad31316e3fc5c

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
<<<<<<< HEAD
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
=======
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder='search monsters' 
          onSearchChange={this.handleChange} 
>>>>>>> e8db0a34a9ac01fe97968d2845aad31316e3fc5c
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
