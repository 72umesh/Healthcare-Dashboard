import { BiInjection } from "react-icons/bi";
import { FaEye, FaHeart } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const scheduleData = [
  {
    Day: "On Thursday",
    appointmentDetails: [
      {
        title: "Health checkup complete",
        icon: BiInjection,
        time: "11:00 AM",
      },
      {
        title: "Ophthalmologist",
        icon: FaEye,
        time: "14:00 AM",
      },
    ],
  },
  {
    Day: "On Saturday ",
    appointmentDetails: [
      {
        title: "Cardiologist",
        icon: FaHeart,
        time: "12:00 AM",
      },
      {
        title: "Neurologist",
        icon: FaUserDoctor,
        time: "16:00PM",
      },
    ],
  },
];
export default scheduleData;
