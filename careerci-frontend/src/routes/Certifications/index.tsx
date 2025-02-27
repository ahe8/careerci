import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Stack,
  Button,
  CircularProgress,
} from "@mui/material";

import { useEffect, useState } from "react";
import AddCertificationForm from "./AddCertificationForm";

import certificationsService from "../../services/certifications";

import { useAppSelector } from "../../app/hooks";

import { Certification } from "../../types/types";

import { useGetCertificationsQuery } from "../../features/api/apiSlice";

const Certifications = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  // const [certifications, setCertifications] = useState<Certification[]>([]);
  // const [showSpinner, setShowSpinner] = useState<boolean>(true);

  const user = useAppSelector((state) => state.auth);

  const {
    data: certifications = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCertificationsQuery(user.userId);

  // useEffect(() => {
  //   if (user && user.userId) {
  //     certificationsService
  //       .getAll(user.userId)
  //       .then((data) => setCertifications(data))
  //       .catch((err) => console.log(err))
  //       .finally(() => setShowSpinner(false));
  //   }
  // }, [user]);

  // if (showSpinner) {
  //   return <CircularProgress />;
  // }

  let content: React.ReactNode;

  if (isLoading) {
    return <CircularProgress />;
  } else if (isSuccess) {
    content = certifications.map((certification) => (
      <TableRow key={certification.id}>
        <TableCell>{certification.organization}</TableCell>
        <TableCell>{certification.name}</TableCell>
        <TableCell>{certification.issueDate}</TableCell>
        <TableCell>{certification.expiryDate}</TableCell>
        <TableCell>
          <a href={`//${certification.url}`}>{certification.url}</a>
        </TableCell>
      </TableRow>
    ));
  } else if (isError) {
    return <div>{error.toString()}</div>;
  }
  // else if(isError) {
  //   console.log(error.toString());
  //   content = <div>{error.toString()}</div>
  // }

  // const certificationsMap = certifications.map((certification) => (
  //   <TableRow key={certification.id}>
  //     <TableCell>{certification.organization}</TableCell>
  //     <TableCell>{certification.name}</TableCell>
  //     <TableCell>{certification.issueDate}</TableCell>
  //     <TableCell>{certification.expiryDate}</TableCell>
  //     <TableCell><a href={`//${certification.url}`}>{certification.url}</a></TableCell>
  //   </TableRow>
  // ));

  return (
    <>
      <div>
        <Stack direction="column" spacing={2}>
          <Typography variant="h3">Certifications</Typography>
          {showForm ? (
            <AddCertificationForm setShowForm={setShowForm} />
          ) : (
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "fit-content" }}
              onClick={() => setShowForm(true)}
            >
              Add
            </Button>
          )}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Organization</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Issue Date</TableCell>
                  <TableCell>Expiry Date</TableCell>
                  <TableCell>URL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {content}
                {/* {certificationsMap} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </div>
    </>
  );
};

export default Certifications;
