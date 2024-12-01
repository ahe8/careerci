import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

import AddJobForm from "./AddJobForm";
import InactiveJobs from "./InactiveJobs";

function createData(
  date: string,
  company: string,
  position: string,
  status: string
) {
  return { date, company, position, status };
}
const rows = [
  createData(new Date().toString(), "Apple", "Software Engineer", "Applied"),
  createData(new Date().toString(), "Meta", "UI/UX Designer", "Applied"),
  createData(
    new Date().toString(),
    "Google",
    "Senior Software Engineer",
    "Applied"
  ),
  createData(new Date().toString(), "Amazon", "Product Manager", "Applied"),
  createData(new Date().toString(), "Netflix", "QA Tester", "Rejected"),
];

const Jobs = () => {
  const [showAddJobForm, setShowAddJobForm] = useState(false);

  return (
    <>
      <div>
        <h1>Jobs</h1>
        <h2>Active Jobs</h2>

        {showAddJobForm ? (
          <AddJobForm setShowAddJobForm={setShowAddJobForm} />
        ) : (
          <Button variant="contained" onClick={()=>setShowAddJobForm(true)}>Add</Button>
        )}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Date Applied</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.date + row.company + row.position}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>{row.position}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <InactiveJobs />

        {/* <div className="relative flex flex-col w-auto h-full  text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
          <table className="w-full text-left table-auto min-w-max">
            <thead className="bg-gray-300">
              <th></th>
              <th></th>
              <th>Position</th>
              <th>Status</th>
            </thead>
            <tbody>
              <tr>
                <td>November 24, 2024</td>
                <td>Apple</td>
                <td>Software Engineer</td>
                <td>Applied</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    </>
  );
};

export default Jobs;
