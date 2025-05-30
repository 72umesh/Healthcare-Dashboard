import sideBar from "../data/sideBar";

function SideBar() {
  return (
    <aside className="sideBar">
      <div className="navbar">
        <p className="sideBar_title_general">General</p>
        <div className="navbar_general">
          {sideBar.general.map((g, index) => (
            <div key={index} className="navigation_links">
              <g.logo className="link_logo" />
              <h3 className="link_title">{g.title}</h3>
            </div>
          ))}
        </div>

        <p>Tools</p>
        <div className="navbar_tools">
          {sideBar.tools.map((t, index) => (
            <div key={index} className="navigation_links">
              <t.logo className="link_logo" />
              <h3 className="link_title">{t.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
export default SideBar;
