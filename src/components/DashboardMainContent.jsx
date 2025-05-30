import DashboardOverview from "./subcomponents/DashboardOverview";
import CalendarView from "./subcomponents/CalendarView";
import ActivityFeed from "./subcomponents/ActivityFeed";
import UpcomingSchedule from "./subcomponents/UpcomingSchedule";

function DashboardMainContent() {
  return (
    <div className="dashboardMainComponent">
      <DashboardOverview />
      <CalendarView />
      <ActivityFeed />
      <UpcomingSchedule />
    </div>
  );
}

export default DashboardMainContent;
