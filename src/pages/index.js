import * as React from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Work from "../components/Work/Work";

// markup
const IndexPage = () => {
  
  return (
    <div id="root">
      <div className="wrapper">
        <Navbar />
        <div id="content">
          <main>
            <div className="flex -mx-0 md:-mx-2 flex-col md:flex-row md:justify-between">
              <div className="w-full md:w-1/3 -px-0 md:-px-2">
                <div className="w-11/12">
                  <Hero />
                </div>
              </div>
              <div className="w-full md:w-2/3 -px-0 md:-px-2">
                <About />
                <Experience />
                <Work />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
