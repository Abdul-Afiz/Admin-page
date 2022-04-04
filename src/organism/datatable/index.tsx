import { Link } from "react-router-dom";

import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";

import "./index.scss";

import { userColumns, userRows } from "../../data-table-source";
import { useState } from "react";

const DataTable = () => {
  const [rows, setRow] = useState(userRows);

  const handleDelete = (id: number) => {
    setRow(rows.filter((row) => row.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div className="cell-action">
            <Link to="/users/test">
              <div className="view-btn">View</div>
            </Link>
            <div
              className="delete-btn"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
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
        className="data-grid"
        rows={rows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
