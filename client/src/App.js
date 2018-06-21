import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from "./components/SearchForm";
import NavBar from './components/Nav';
import Home from "./components/pages";

class App extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home")
    {
      return <Home />;
    }

    else {
      return <Saved />;
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">NYT Article Scrobbler</h1>
          <NavBar />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchForm />
        {/* </SearchForm> */}
      </div>
    );
  };
};

export default App;
