import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
cName: "nav-text ms-4"
  },
  {
title: "Tickets",
 path: "/form",
    icon: <IoIcons.IoIosPaper />,
cName: "nav-text ms-4"
  },
  {
title: "Status",
    path: "/",
    icon: <FaIcons.FaEnvelopeOpenText />,
cName: "nav-text ms-4"
  },
  {
    title: "Support",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
cName: "nav-text ms-4"
  }
];
