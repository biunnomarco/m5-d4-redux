import React from "react";
import LatestReleases from "./LatestReleases/LatestReleases";
import './App.css'
import NavBar from "./NavBar/NavBar";
import MyBody from "./MyBody/MyBody";
import MyCarousel from "./MyCarousel/MyCarousel";


function App() {
  return (
    <div className="App">
      <NavBar />
      <MyCarousel />
      <MyBody />
        {/* <LatestReleases /> */}
        {/* <CommentSection /> */}
     
    </div>
  );
}

export default App;
