import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import SearchForm from "./components/SearchForm";
import NavBar from './components/Nav';
// import Home from "./pages";
// import Saved from "./pages";
import Home from "./pages/HomePage";
import Saved from "./pages/SavedPage";
class App extends Component {
  state = {
    currentPage: "" //"Saved"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Saved")
    {
      return <Saved />;
    }

    else {
      return <Home />;
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">NYT Article Scrobbler</h1>
          <NavBar
            currentPage = {this.state.currentPage}
            handlePageChange = {this.handlePageChange}
          />
        </header>
        {/* <p className="App-intro"> */}
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        {/* </p> */}
        {/* <SearchForm /> */}
        {/* </SearchForm> */}
        {this.renderPage()}

      </div>
    );
  };
};

export default App;
