import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Images/icon.png";

import { useDispatch } from "react-redux";
import { formToggleSliceActions } from "../../store/FormToggleSlice";

import { useHistory } from "react-router-dom";
import "./Header.css";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import { getFetchAuthSuccess, logout } from "../../store/Slices/AuthSlice";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showList, setShowList] = useState(false);

  const isLogged = useSelector((state) => state.auth.isLogged);

  console.log(isLogged)
  const toggleModal = (e) => {
    setShowList((prev) => !prev);
    dispatch(formToggleSliceActions.toggleLoginForm())
  };
  const toggleList = (e) => {
    setShowList((prev) => !prev);
  };

  const logoutHandler = (e) => {
    setShowList((prev) => !prev);
    dispatch(logout())
  };

  const goToHome = (e) => {
    history.push("/");
  };

  return (
    <div className="header">
      <div className="nav-list">
        <img src={logo} onClick={goToHome} />
        <MenuIcon className="menu" onClick={toggleList} />
        <div className={`list ${showList ? "show" : ""}`}>
          <NavLink to="/movies" onClick={toggleList}>
            Movies{" "}
          </NavLink>
          <NavLink to="/series" onClick={toggleList}>
            Series{" "}
          </NavLink>
        </div>
      </div>
      <div className="header-section-2">
        <SearchBar />
        {!isLogged ? (
          <button onClick={toggleModal} className="login-btn1">
            Login
          </button>
        ) : (
          <button onClick={logoutHandler} className="login-btn1">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
