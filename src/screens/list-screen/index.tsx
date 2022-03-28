import DataTable from "../../organism/datatable";
import NavBar from "../../organism/navbar";
import SideBar from "../../organism/sidebar";
import "./index.scss";

const ListScreen = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="list-container">
        <NavBar />
        <DataTable />
      </div>
    </div>
  );
};

export default ListScreen;
