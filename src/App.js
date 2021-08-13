import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import HeroMenu from "./HeroMenu";
import AboutMe from "./AboutMe";
import LandingPage from "./LandingPage";
import Projects from "./Projects";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  if (loading) {
    return <div>animation works</div>;
  } else {
    return (
      <React.Fragment>
        <NavigationBar />
        <main>
          <LandingPage />
          <AboutMe />
          <section>
            <h3>02.Projects</h3>
            <Projects />
            <Projects />
            <Projects />
            <HeroMenu />
          </section>
        </main>
      </React.Fragment>
    );
  }
};

export default App;
