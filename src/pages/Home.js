import React, { useState, useEffect } from "react";
import Grid from "../components/Grid";
import "./Home.css";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PulseLoader from "react-spinners/PulseLoader";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <di>
      {loading ? (
        <div class="wrapper" loading={loading}>
          <div class="circle1"></div>
          <div class="circle1"></div>
          <div class="circle1"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Grid />
        </>
      )}
    </di>
  );
};

export default Home;
