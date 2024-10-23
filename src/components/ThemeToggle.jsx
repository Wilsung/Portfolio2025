import { useState } from "react";
import svg from "../assets/icons/motion.svg";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  localStorage.setItem("theme", theme)
  document.documentElement.setAttribute("data-theme", theme);

  const toggleTheme = (e) => {
    e.preventDefault();
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <img src={svg} alt="" onClick={toggleTheme} />
    </div>
  );
};

export default ThemeToggle;
