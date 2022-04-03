import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";

import "./index.scss";

import { userColumns, userRows } from "../../data-table-source";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cell-action">
            <Link to="/users/test">
              <div className="view-btn">View</div>
            </Link>
            <div className="delete-btn">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="data-table">
      <div className="data-table-title">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
