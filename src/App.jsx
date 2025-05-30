import "./App.css";
import DashboardMainContent from "./components/DashboardMainContent";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main_layout">
        <SideBar />
        <DashboardMainContent />
      </main>
    </div>
  );
}

export default App;
