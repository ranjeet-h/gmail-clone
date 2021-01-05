import { Button } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./Sidebar.css";
import InboxRoundedIcon from "@material-ui/icons/InboxRounded";
import SidebarOption from "./SidebarOption";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";
import LabelImportantRoundedIcon from "@material-ui/icons/LabelImportantRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import NoteRoundedIcon from "@material-ui/icons/NoteRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { IconButton } from "@material-ui/core";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import DuoRoundedIcon from "@material-ui/icons/DuoRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import LabelRoundedIcon from "@material-ui/icons/LabelRounded";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        size="large"
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxRoundedIcon}
        title="Inbox"
        number={54}
        selecteed={true}
      />
      <SidebarOption Icon={StarRoundedIcon} title="Starred" number={54} />
      <SidebarOption Icon={AccessTimeRoundedIcon} title="Snoozed" number={54} />
      <SidebarOption
        Icon={LabelImportantRoundedIcon}
        title="Important"
        number={54}
      />
      <SidebarOption Icon={SendRoundedIcon} title="Sent" number={54} />
      <SidebarOption Icon={NoteRoundedIcon} title="Drafts" number={54} />
      <SidebarOption Icon={LabelRoundedIcon} title="Categories" number={6} />
      <SidebarOption Icon={ExpandMoreRoundedIcon} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonRoundedIcon />
          </IconButton>
          <IconButton>
            <DuoRoundedIcon />
          </IconButton>
          <IconButton>
            <PhoneRoundedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
