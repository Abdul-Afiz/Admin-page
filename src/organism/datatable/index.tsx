import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";

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
            <div className="view-btn">View</div>
            <div className="delete-btn">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="data-table">
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
