function AppointmentCard(props) {
  return (
    <div className="appointmentCard">
      <div className="appointmentCard_header">
        <h3>
          {props.title}{" "}
          <span>
            <props.icon />
          </span>
        </h3>
      </div>
      <p className="appointment_time">{props.time}</p>
      <p>{props.drName}</p>
    </div>
  );
}

export default AppointmentCard;
