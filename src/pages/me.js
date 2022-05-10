import * as React from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";

// markup
const IndexPage = () => {
  return (
    <div id="root">
      <div className="wrapper">
        <Navbar />
        <div id="content">
          <main>
            <Hero />
            <About />
            <Experience />
          </main>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
