import {
  calendarData,
  calendarAppointmentDetails,
} from "../../data/calendarData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AppointmentCard from "../container/AppointmentCard";

function CalendarView() {
  return (
    <div className="calendarView">
      <div className="calendar_header">
        <h3>
          October 2021
          <span className="arrow_container">
            <FaArrowLeft className="arrow" />
            <FaArrowRight className="arrow" />
          </span>
        </h3>
      </div>
      <div className="calendar_grid">
        {calendarData.map((data, index) => (
          <div key={index} className="day_column">
            <p>{data.day}</p>
            <h4>{data.date}</h4>
            {data.times.map((time, i) => (
              <p key={i}>{time}</p>
            ))}
          </div>
        ))}
      </div>
      <div className="calendar_appointment">
        {calendarAppointmentDetails.map((appointment, index) => (
          <AppointmentCard
            key={index}
            title={appointment.title}
            icon={appointment.icon}
            time={appointment.time}
            drName={appointment.drName}
          />
        ))}
      </div>
    </div>
  );
}
export default CalendarView;
