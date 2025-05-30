import { MdWidgets, MdHistory } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { FcStatistics } from "react-icons/fc";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const general = [
  {
    logo: MdWidgets,
    title: "DashBoard",
  },
  {
    logo: MdHistory,
    title: "History",
  },

  {
    logo: FaCalendarAlt,
    title: "Calendar",
  },
  {
    logo: CiSquarePlus,
    title: "Appointments",
  },
  {
    logo: FcStatistics,
    title: "Statistics",
  },
];

const tools = [
  {
    logo: IoChatbubbleEllipsesOutline,
    title: "Chat",
  },
  {
    logo: FaPhone,
    title: "Support",
  },
];

export default { general, tools };
