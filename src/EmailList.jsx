import { Checkbox, IconButton } from "@material-ui/core";
import RedoRoundedIcon from "@material-ui/icons/RedoRounded";
import React from "react";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import KeyboardHideRoundedIcon from "@material-ui/icons/KeyboardHideRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import InboxRoundedIcon from "@material-ui/icons/InboxRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded";
import "./EmailList.css";
import Section from "./Section";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownRoundedIcon />
          </IconButton>
          <IconButton>
            <RedoRoundedIcon />
          </IconButton>
          <IconButton>
            <MoreVertRoundedIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftRoundedIcon />
          </IconButton>
          <IconButton>
            <ChevronRightRoundedIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideRoundedIcon />
          </IconButton>
          <IconButton>
            <SettingsRoundedIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxRoundedIcon} title="Primary" color="red" selected />
        <Section
          Icon={PeopleRoundedIcon}
          title="Social"
          color="#1A73E8"
          
        />
        <Section
          Icon={LocalOfferRoundedIcon}
          title="Promotions"
          color="green"
          
        />
      </div>
    </div>
  );
}

export default EmailList;
