import { Link } from "react-router-dom";

import {
  AccountCircle,
  Assessment,
  Assignment,
  Dashboard,
  HealthAndSafety,
  LocalShipping,
  Logout,
  Notifications,
  Person,
  Settings,
  Shop,
  Store,
} from "@mui/icons-material";
import "./index.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">Admin</span>
        </Link>
      </div>
      <div className="center">
        <p className="title">MAIN</p>
        <div className="section">
          <Dashboard className="icon" />
          <span>Dashboard</span>
        </div>
        <p className="title">LISTS</p>
        <div className="section">
          <Link to="/users">
            <Person className="icon" />
            <span>Users</span>
          </Link>
        </div>
        <div className="section">
          <Link to="/products">
            <Store className="icon" />
            <span>Products</span>
          </Link>
        </div>
        <div className="section">
          <Shop className="icon" />
          <span>Orders</span>
        </div>
        <div className="section">
          <LocalShipping className="icon" />
          <span>Delivery</span>
        </div>
        <p className="title">USEFUL</p>
        <div className="section">
          <Assessment className="icon" />
          <span>Stats</span>
        </div>
        <div className="section">
          <Notifications className="icon" />
          <span>Notifications</span>
        </div>
        <p className="title">SERVICE</p>
        <div className="section">
          <HealthAndSafety className="icon" />
          <span>System Health</span>
        </div>
        <div className="section">
          <Assignment className="icon" />
          <span>Logs</span>
        </div>
        <div className="section">
          <Settings className="icon" />
          <span>Settings</span>
        </div>
        <p className="title">USER</p>
        <div className="section">
          <AccountCircle className="icon" />
          <span>Profile</span>
        </div>
        <div className="section">
          <Logout className="icon" />
          <span>Logout</span>
        </div>
      </div>
      <div className="bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
      </div>
    </div>
  );
};

export default SideBar;
