import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Tickets",
    icon: <IoIcons.IoIosPaper />,
cName: "nav-text",
    subMenu: [
      {
        title: "Link One",
        path: "/admin",
        cName: "dropdown-link"
      },
      {
        title: "Link Two",
        path: "/dashboardTC",
        cName: "dropdown-link"
      },
      {
        title: "Link Three",
        path: "/dashboardHR",
        cName: "dropdown-link"
      }
    ]
  },
//   {
//     title: "Status",
//     path: "/status",
//     icon: <FaIcons.FaEnvelopeOpenText />,
//     cName: "nav-text"
//   },
//   {
//     title: "Support",
//     path: "/",
//     icon: <IoIcons.IoMdHelpCircle />,
//     cName: "nav-text"
//   }
];