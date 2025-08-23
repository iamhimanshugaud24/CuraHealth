import React, { useContext } from "react";
import Hero from "../components/Hero";
import KeyHighlights from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to CuraHealth | Your health companion"
        }
        imageUrl={"/hero.png"}
      />
      <KeyHighlights imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
