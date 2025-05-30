import { FaTooth } from "react-icons/fa";
import { LuBicepsFlexed } from "react-icons/lu";

const calendarData = [
  {
    day: "Mon",
    date: "25",
    times: ["10:00", "11:00", "12:00"],
  },
  {
    day: "Tues",
    date: "26",
    times: ["08:00", "09:00", "10:00"],
  },

  {
    day: "Wed",
    date: "27",
    times: ["12:00", "--", "13:00"],
  },
  {
    day: "Thur",
    date: "28",
    times: ["10:00", "11:00", "--"],
  },
  {
    day: "Fri",
    date: "29",
    times: ["--", "14:00", "16:00"],
  },
  {
    day: "Sat",
    date: "30",
    times: ["12:00", "14:00", "15:00"],
  },
  {
    day: "Sun",
    date: "31",
    times: ["09:00", "10:00", "11:00"],
  },
];
const calendarAppointmentDetails = [
  {
    title: "Dentist",
    icon: FaTooth,
    time: "09:00 -11:00",
    drName: "Dr.Cameron Williamson",
  },
  {
    title: "Physiotherapy Appointment",
    icon: LuBicepsFlexed,
    time: "11:00 -12:00",
    drName: "Dr.Kevin Djones",
  },
];
export { calendarData, calendarAppointmentDetails };
