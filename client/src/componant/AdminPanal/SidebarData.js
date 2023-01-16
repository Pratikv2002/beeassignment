import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as md from "react-icons/md";
import * as gr from "react-icons/gr";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "AdminRequest",
    path: "/adminRequest",
    icon: <md.MdAdminPanelSettings />,
    cName: "nav-text"
  },
  {
    title: "Study Material",
    path: "/UploadMaterial",
    icon: <md.MdDriveFolderUpload />,
    cName: "nav-text"
  },
  {
    title: "Time Table",
    path: "/UploadTimeTable",
    icon: <RiIcons.RiTimerFill />,
    cName: "nav-text"
  },
  {
    title: "Team",
    path: "/team",
    icon: <RiIcons.RiTeamFill/>,
    cName: "nav-text"
  },
  {
    title: "Messages",
    path: "/",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  }
];
