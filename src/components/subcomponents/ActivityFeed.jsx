import activityData from "../../data/activityFeedDAta";

function ActivityFeed() {
  return (
    <div className="activityFeed">
      <div className="activityFeed_container">
        <div className="activityFeed_header">
          <h4>Activity</h4>
          <p>3 appointments on this week</p>
        </div>

        <div className="activityFeed_bars">
          {activityData.map((data, index) => (
            <div key={index}>
              <div className="bars">
                {data.bars.map((height, i) => (
                  <div
                    key={i}
                    style={{ height: `${height}%` }}
                    className="bar"
                  ></div>
                ))}
              </div>
              <p className="day-label">{data.day}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ActivityFeed;
