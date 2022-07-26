import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

const works = () => {
  return (
    <div>
      <Hero
        heading="Mi trabajo"
        message="Esto e algo de mi trabajo realizado ultimamente"
      />
      <Portfolio />
    </div>
  );
};

export default works;
