import React from "react";
import CardSection from "./Card-Section/CardSection";
import MainSection from "./Main-Section/MainSection";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div class="container-fluid">
      <Navbar />
      <MainSection/>
      <div style={{marginTop:'30px'}}>
      <CardSection/>
      </div>
      
    </div>
  );
};

export default Home;
