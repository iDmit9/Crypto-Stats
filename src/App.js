import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Navbar } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
};

export default App;