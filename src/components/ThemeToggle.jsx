import { useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  localStorage.setItem("theme", theme);
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
    <div className="theme_button">
      <div href="mailto:ungwpublic@gmail.com" onClick={toggleTheme}>
        {theme === "dark" ? (
          <i className="fa-solid fa-moon"></i>
        ) : (
          <i className="fa-solid fa-lightbulb"></i>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
