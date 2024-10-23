import { NavLink } from "react-router-dom";
import logoImg from "../../public/favicon3.png";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function MainNavigation() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuClick() {
    setShowMenu((menu) => !menu);
  }
  return (
    <header className="header">
      <NavLink to="/" end>
        {/* <h2 className="logo">WU</h2> */}
        <div>
          <svg
            aria-hidden="true"
            className="hover:fill-cyan-400"
            width="48"
            height="29"
            viewBox="0 0 48 29"
          >
            <path d="M0 0h6.5a6 6 0 0 1 5.2 3.1L19.4 17l4-9L19 0h6.5a6 6 0 0 1 5.2 3.1L39.5 19 35 29 24.5 10 16 29 0 0Zm46.7 2.8A2 2 0 0 0 45 0h-7l5.5 10 3.2-7.2Z"></path>
          </svg>
        </div>
      </NavLink>
      <nav className="flex">
        <ul className="hidden sm:flex gap-4 md:gap-6 text-xl navigation">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <a href="mailto:ungwpublic@gmail.com">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="">
              <ThemeToggle />
            </a>
          </li>
        </ul>
      </nav>
      {/* mobile menu */}
      <div className="sm:hidden navbar-menu relative z-50">
        {!showMenu && (
          <button onClick={handleMenuClick}>
            <i className="fa-solid fa-bars"></i>
          </button>
        )}
        {showMenu && (
          <>
            <button
              className="fixed inset-0 bg-gray-800 opacity-25"
              onClick={handleMenuClick}
            ></button>
            <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-4/6 max-w-sm py-6 px-6 bg-[#0F2027] border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <NavLink className="mr-auto" to="/" end>
                  <i className="fa-solid fa-house"></i>
                </NavLink>
                <button onClick={handleMenuClick}>
                  <i className="fa-solid fa-xmark fa-xl text-stone-500"></i>
                </button>
              </div>

              <ul className="hamburger_menu">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  <li>About</li>
                </NavLink>

                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  <li>Projects</li>
                </NavLink>

                <a href="mailto:ungwpublic@gmail.com">
                  <li>
                    <i className="fa-regular fa-envelope"></i> Contact Me
                  </li>
                </a>
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
