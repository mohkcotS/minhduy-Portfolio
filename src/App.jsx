import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./Component/LoadingScreen";
import { Navbar } from "./Component/Navbar";
import { MobileMenu } from "./Component/MobileMenu";
import { Home } from "./Component/Section/Home";
import { Projects } from "./Component/Section/Projects";
import "./index.css";
import { Contact } from "./Component/Section/Contact";

function App() {
  const [isLoaded, setIsLoaded] = new useState(false);
  const [menuOpen, setMenuOpen] = new useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }  bg-gradient-to-r from-black/50 to-[#0f1f4d] text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
