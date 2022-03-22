import SideBar from "../../organism/sidebar";
import NavBar from "../../organism/navbar";
import "./home.scss";
import Widget from "../../organism/widget";

const HomeScreen = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="home-container">
        <NavBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
