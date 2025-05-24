import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Initialize theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => alert("You Logged Out successfully"))
      .catch((error) => console.log(error));
  };

  return (
    <nav className="py-7 shadow-md bg-primary text-text">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-11/12">
        {/* Logo/Name */}
        <Link to="/" className="text-xl font-bold">HobbyHub</Link>

        {/* Hamburger Icon and Theme Toggle for Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-text focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <button
            className="text-text focus:outline-none"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" exact className="hover:bg-base-300 px-2 py-1 rounded" activeClassName="active">Home</NavLink>
          <NavLink to="/groups" className="hover:bg-base-300 px-2 py-1 rounded" activeClassName="active">All Groups</NavLink>
          <NavLink to="/createGroup" className="hover:bg-base-300 px-2 py-1 rounded" activeClassName="active">Create Group</NavLink>
          <NavLink to="/myGroups" className="hover:bg-base-300 px-2 py-1 rounded" activeClassName="active">My Groups</NavLink>
          <NavLink to="/my-profile" className="hover:bg-base-300 px-2 py-1 rounded" activeClassName="active">My Profile</NavLink>

          {/* User Avatar */}
          <div className="relative group cursor-pointer">
            <img
              src={user?.photoURL || "https://img.icons8.com/?size=40&id=33100&format=png"}
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
            {user && (
              <div className="absolute hidden group-hover:block bg-black text-text text-xs px-2 py-1 rounded shadow-md mt-1">
                {user.email}
              </div>
            )}
          </div>

          {/* Theme Toggle for Desktop */}
          <button
            className="text-text focus:outline-none"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          </button>

          {user ? (
            <button onClick={handleLogOut} className="text-xs px-3 py-1 bg-red-500 rounded hover:bg-red-600 text-white">
              Logout
            </button>
          ) : (
            <NavLink to="/auth/login" className="text-xs px-3 py-1 bg-red-500 rounded hover:bg-red-600 text-white" activeClassName="active">
              Login
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 mt-4 px-6 text-sm font-medium">
          <NavLink to="/" exact className="hover:bg-base-300 px-2 py-1 rounded" activeClassName="active">Home</NavLink>
          <NavLink to="/groups" className="hover:bg-base-300 px-2 py-1 rounded" activeClassName="active">All Groups</NavLink>
          <NavLink to="/createGroup" className="hover:bg-base-300 px-2 py-1 rounded" activeClassName="active">Create Group</NavLink>
          <NavLink to="/myGroups" className="hover:bg-base-300 px-2 py-1 rounded" activeClassName="active">My Groups</NavLink>
          <NavLink to="/my-profile" className="hover:bg-base-300 px-2 py-1 rounded" activeClassName="active">My Profile</NavLink>

          {/* User Avatar */}
          <div className="relative group cursor-pointer">
            <img
              src={user?.photoURL || "https://img.icons8.com/?size=40&id=33100&format=png"}
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>

          {user ? (
            <button onClick={handleLogOut} className="text-xs px-3 py-1 bg-red-500 rounded hover:bg-red-600 text-white">
              Logout
            </button>
          ) : (
            <NavLink to="/auth/login" className="text-xs px-3 py-1 bg-red-500 rounded hover:bg-red-600 text-white" activeClassName="active">
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;