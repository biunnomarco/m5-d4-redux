import React from "react";
import LatestReleases from "./LatestReleases/LatestReleases";
import './App.css'
import NavBar from "./NavBar/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <LatestReleases/>
    </div>
  );
}

export default App;
