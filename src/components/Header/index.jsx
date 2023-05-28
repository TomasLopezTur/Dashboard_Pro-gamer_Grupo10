import styles from "./index.modules.css"

export const Header = ({userName = "Grupo-10"}) => {
  return (
    <>
      {/* <!-- Topbar --> */}
      <nav className="navbar navbar-expand navbar-dark bg-dark topbar mb-4 static-top shadow">
        {/* <!-- Sidebar Toggle (Topbar) --> */}

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
         
          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <li className={`nav-item ${styles.avatarLogoContainer}`}>
              <i
                className={`fas fa-user ${styles.userLogo}`}
              ></i>
              <span className="text-gray-600 small text-center">
                {userName}
              </span>
          </li>
        </ul>
      </nav>
      {/* <!-- End of Topbar --> */}
    </>
  );
};

