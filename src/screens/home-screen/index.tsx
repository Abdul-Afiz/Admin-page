import SideBar from "../../organism/sidebar";
import NavBar from "../../organism/navbar";
import ScreenTemplate from "../../organism/screen template";
import "./home.scss";
import Widget from "../../organism/widget";
import Featured from "../../organism/featured";
import Chart from "../../organism/chart";
import List from "../../organism/table";

const HomeScreen = () => {
  return (
    <ScreenTemplate>
      <div className="home">
        <div className="home-container">
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div>
          <div className="list-container">
            <div className="list-title">Latest Transaction</div>
            <List />
          </div>
        </div>
      </div>
    </ScreenTemplate>
  );
};

export default HomeScreen;
