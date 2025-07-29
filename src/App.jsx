import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState("general");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <>
      <Navbar setCategory={setCategory} toggleTheme={toggleTheme} theme={theme} />
      <NewsBoard category={category} theme={theme} />
    </>
  );
};

export default App;

