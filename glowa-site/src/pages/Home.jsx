import React from "react";
import Navbar from "../components/organisms/NavBar";
import Hero from "../components/organisms/Hero";
import Recommended from "../components/organisms/Recommended";
import Footer from "../components/organisms/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Recommended />
      <Footer />
    </>
  );
}

export default Home;
