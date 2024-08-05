import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Dash</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search" className="" />
        <img src="/app.svg" alt="app" className="" />
        <img src="/expand.svg" alt="expand" className="" />

        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user"
          />
          <span>Jane</span>
        </div>
        <img src="settings.svg" alt="settings" className="" />
      </div>
    </div>
  );
};

export default Navbar;
