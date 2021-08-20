import React, { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import LandingPage from "../src/LandingPage/LandingPage";
import NavBar from "../src/NavBar/NavBar";

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
        <div className="round"></div>
        <main>
          <NavBar />
          <section className="landing-page">
            <LandingPage />
          </section>
          <section className="about-me">
            <AboutMe />
          </section>
        </main>
      </React.Fragment>
    );
  }
};

export default App;
