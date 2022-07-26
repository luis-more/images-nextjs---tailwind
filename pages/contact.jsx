import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

const contact = () => {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Enviame un mensaje para hacer tus diseños o trabajos"
      />
      <Contact />
    </div>
  );
};

export default contact;
