import AnatomySection from "./AnatomySection";
import HealthStatusCard from "./HealthStatusCard";

function DashboardOverview() {
  return (
    <div className="dashboardOverview">
      <AnatomySection />
      <HealthStatusCard />
    </div>
  );
}
export default DashboardOverview;
