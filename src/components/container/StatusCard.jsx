function StatusCard(props) {
  return (
    <div className="statusCard">
      <div className="statusCard_header">
        <props.icon className="statusCard_Icon" />
        <h3>{props.title}</h3>
      </div>
      <p className="date">{props.date}</p>
      <div className="statusbar_container">
        <span
          style={{ backgroundColor: `${props.color}` }}
          className="status_bar"
        ></span>
      </div>
    </div>
  );
}
export default StatusCard;
