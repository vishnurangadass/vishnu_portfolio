import React, { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./styles/App.css";
import { Spinner } from "./helpers/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="app">
      {isLoading ? (
        <div className="spinner-header">
          <Spinner />
        </div>
      ) : (
        <>
          <Header />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
