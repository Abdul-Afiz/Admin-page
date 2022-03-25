import "./index.scss";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  function createData(
    id: number,
    product: string,
    img: string,
    customer: string,
    date: string,
    amount: number,
    method: string,
    status: string
  ) {
    return {
      id,
      product,
      img,
      customer,
      date,
      amount,
      method,
      status,
    };
  }

  const rows = [
    createData(
      212121,
      "Acer Nitro S",
      "https://images.pexels.com/photos/11358721/pexels-photo-11358721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "John Smith",
      "1 March",
      785,
      "Cash on Delivery",
      "Approved"
    ),
    createData(
      212122,
      "Acer Nitro S",
      "https://images.pexels.com/photos/8167164/pexels-photo-8167164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Smith",
      "2 March",
      786,
      "Cash on Delivery",
      "Pending"
    ),
    createData(
      212123,
      "Acer Nitro S",
      "https://images.pexels.com/photos/8166788/pexels-photo-8166788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "John Smith",
      "1 March",
      785,
      "Cash on Delivery",
      "Pending"
    ),
    createData(
      212124,
      "Acer S",
      "https://images.pexels.com/photos/11358721/pexels-photo-11358721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "John S",
      "1 March",
      785,
      "Cash on Delivery",
      "Approved"
    ),
    createData(
      212125,
      "Acer 3",
      "https://images.pexels.com/photos/11358721/pexels-photo-11358721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "Smith",
      "1 March",
      785,
      "Cash on Delivery",
      "Pending"
    ),
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-cell">Tracking ID</TableCell>
            <TableCell className="table-cell">Product</TableCell>
            <TableCell className="table-cell">Customer</TableCell>
            <TableCell className="table-cell">Date</TableCell>
            <TableCell className="table-cell">Amount</TableCell>
            <TableCell className="table-cell">Payment Method</TableCell>
            <TableCell className="table-cell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="table-cell">{row.id}</TableCell>
              <TableCell className="table-cell">
                <div className="cell-wrapper">
                  <img src={row.img} alt={row.product} className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="table-cell">{row.customer}</TableCell>
              <TableCell className="table-cell">{row.date}</TableCell>
              <TableCell className="table-cell">{row.amount}</TableCell>
              <TableCell className="table-cell">{row.method}</TableCell>
              <TableCell className="table-cell">
                <span
                  className={`status p-[5px] rounded-[5px] ${
                    row.status === "Approved"
                      ? "text-green-600 bg-[#00800027]"
                      : "text-[goldenrod] bg-[#bdbd031a]"
                  }`}
                >
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
