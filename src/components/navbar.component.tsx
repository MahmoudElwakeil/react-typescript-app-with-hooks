import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../App";
import UserViewModel from "../models/user-view-model";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";
import { NavDropdown } from "react-bootstrap";
import LocalStorageService from "../services/local-storage-service";

function NavBar() {
  const [theme, setTheme] = React.useState("light");
  const { currentUser, setCurrentUser, showAlert } = React.useContext(UserContext);

  /*
  const [current, setCurrent] = React.useState<UserViewModel>(
    currentUser as UserViewModel
  );
  */
  const [translate, i18n] = useTranslation();

  function toggleTheme() {
    // eslint-disable-next-line no-const-assign
    setTheme(theme === "light" ? "dark" : "light");
  }

  function changeLanguage() {
    showAlert("Alert From Nav Bar...");
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
    new LocalStorageService().setLanguage(i18n.language);
    window.location.reload();
    //i18n.changeLanguage(e);
  }

  function onChangeUser() {
    //setCurrent({ ...current, name: "asd" });
    setCurrentUser({ ...currentUser as UserViewModel, name: "asd" });
  }

  // if u use a to route, all files will be downloaded from server each and every time
  // better to use Link, only the needed component of the route will be downloaded so it's much more faster
  return (
    <>
      <nav
        className={`navbar container-fluid navbar-expand-lg navbar-light bg-${theme}`}
      >
        <NavLink to="/home" className="navbar-brand">
          Home
        </NavLink>
        <NavLink to="/counters" className="navbar-brand">
          Counters
        </NavLink>
        <NavLink to="/movies" className="navbar-brand">
          Movies
        </NavLink>
        <NavLink to="/posts" className="navbar-brand">
          Posts
        </NavLink>
        <NavLink to="/todos" className="navbar-brand">
          Todos List
        </NavLink>
        <NavDropdown
          className="justify-content-end"
          align="end"
          title={`Hello: ${(currentUser as UserViewModel).title + "/" + (currentUser as UserViewModel).name}`}
          id="basic-nav-dropdown"
        >
          <Dropdown.Item as={Link} to="/login">
            Login
          </Dropdown.Item>

          <Dropdown.Item onClick={changeLanguage}>
            {i18n.language === "en" ? "Arabic" : "English"}
          </Dropdown.Item>

          <Dropdown.Divider />

          {theme === "light" ? (
            <NavDropdown.Item onClick={toggleTheme}>
              <MdLightMode /> Dark Mode
            </NavDropdown.Item>
          ) : (
            <NavDropdown.Item onClick={toggleTheme}>
              <MdOutlineLightMode /> Light Mode
            </NavDropdown.Item>
          )}

          <NavDropdown.Item onClick={onChangeUser}>Change User</NavDropdown.Item>
        </NavDropdown>
      </nav>
    </>
  );
}

export default NavBar;
