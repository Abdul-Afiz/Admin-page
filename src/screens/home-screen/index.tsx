import SideBar from "../../organism/sidebar";
import "./home.scss";

const HomeScreen = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="home-container">container</div>
    </div>
  );
};

export default HomeScreen;
