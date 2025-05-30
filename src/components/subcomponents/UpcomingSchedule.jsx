import AppointmentCard from "../container/AppointmentCard";
import scheduleData from "../../data/upcomingSchedule";

function UpcomingSchedule() {
  return (
    <div className="upcomingSchedule">
      <h3>The Upcoming Schedule</h3>

      <div className="upcomingSchedule_container">
        {scheduleData.map((data, index) => (
          <div key={index}>
            <p className="day_title">{data.Day}</p>

            <div className="eachDay_container">
              {data.appointmentDetails.map((appointment, i) => (
                <AppointmentCard
                  key={i}
                  title={appointment.title}
                  icon={appointment.icon}
                  time={appointment.time}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default UpcomingSchedule;
