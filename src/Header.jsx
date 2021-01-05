import React from "react";
import "./Header.css";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import { Avatar, IconButton } from "@material-ui/core";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuRoundedIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchRoundedIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownRoundedIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsRoundedIcon />
        </IconButton>
        <IconButton>
          <NotificationsRoundedIcon />
        </IconButton>
        <div className="headerRight__avtar">
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
