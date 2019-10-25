import React from "react";
import { Container } from "@material-ui/core";
import Intro from "../components/About/Intro";
import Projects from "./About/Projects.js"

const Home = () => {
  return (
    <div>
      <Container>
        <Intro />
        <Projects />
      </Container>
    </div>
  );
};

export default Home;
