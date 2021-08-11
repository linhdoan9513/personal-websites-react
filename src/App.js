import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import HeroMenu from "./HeroMenu";
import Demo from "./Demo";

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
      <div>
        <NavigationBar />
        <Demo />
        <HeroMenu />
      </div>
    );
  }
};

export default App;
