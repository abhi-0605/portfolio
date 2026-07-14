
import React, { useEffect, useState } from "react";

import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Loader from "./animations/Loader";
import MouseGlow from "./animations/MouseGlow";
import ScrollProgress from "./animations/ScrollProgress";
import BackToTop from "./animations/BackToTop";
import FloatingBackground from "./animations/FloatingBackground";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer=setTimeout(() => {
      setLoading(false);
    }, 2500);
  
    return () => {
      clearTimeout(timer);
    }
  }, [])
  

  return (
    <>
      <FloatingBackground/>
      <ScrollProgress/>
      <MouseGlow/>
      <AnimatePresence mode="wait">
        {loading && <Loader/>}
      </AnimatePresence>

      {!loading && <Home/>}

      <BackToTop/>
    </>
  )
}

export default App;