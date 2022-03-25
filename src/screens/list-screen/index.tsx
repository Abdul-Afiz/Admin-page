import NavBar from "../../organism/navbar";
import SideBar from "../../organism/sidebar";
import "./index.scss";

const ListScreen = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="list-container">
        <NavBar />
        datatable
      </div>
    </div>
  );
};

export default ListScreen;
