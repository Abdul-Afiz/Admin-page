import NavBar from "../../organism/navbar";
import SideBar from "../../organism/sidebar";
import "./index.scss";

const NewScreen = () => {
  return (
    <div className="new">
      <SideBar />
      <div className="new-container">
        <NavBar />
        <div className="top">
          <div className="">
            <h1>Add New user</h1>
          </div>
        </div>
        <div className="bottom">
          <div className="left">left</div>
          <div className="right">right</div>
        </div>
      </div>
    </div>
  );
};

export default NewScreen;
