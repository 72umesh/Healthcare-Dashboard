import { MdKeyboardArrowDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import StatusCard from "../container/StatusCard";
import statusCardData from "../../data/statusCardData";

function HealthStatusCard() {
  return (
    <div className="healthStatusCard">
      <p className="healthStatus_Detail">
        This Week
        <span>
          {" "}
          <MdKeyboardArrowDown />
        </span>
      </p>
      <div className="statusCard_container">
        {statusCardData.map((data, index) => (
          <StatusCard
            key={index}
            icon={data.icon}
            title={data.title}
            date={data.date}
            color={data.color}
          />
        ))}
      </div>
      <p className="healthStatus_Detail">
        Details
        <span>
          {" "}
          <FaArrowRight />
        </span>
      </p>
    </div>
  );
}
export default HealthStatusCard;
