function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <div className="title">
          <span>Health</span>care.
        </div>
        <div className="searchbar_container flex-center">
          <span className="searchbar_icon">🔍</span>
          <input type="text" className="searchbar_input" placeholder="Search" />
          <span className="notification_icon">🔔</span>
        </div>
        <div className="user_profile">
          <div className="user_profile_picture flex-center">👦🏻</div>
          <div className="user_profile_add flex-center">+</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
