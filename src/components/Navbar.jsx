import { NavLink } from "react-router-dom";

export default function navbar() {
  return (
    <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Store Crude
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink end to={"/"} className="nav-link ">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink end to={"/users"} className="nav-link ">Users</NavLink>
            </li>
           <li className="nav-item">
              <NavLink end to={"/users/create"} className="nav-link ">Create user</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
