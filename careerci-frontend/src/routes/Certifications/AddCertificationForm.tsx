import {  useState } from "react";
import { Stack, TextField, Button } from "@mui/material";
import { getFormattedDate, getCurrentDate } from "../../utils/utils";

import certificationsService from "../../services/certifications";

import { CertificationEntry } from "../../types/types";
import { useAppSelector } from "../../app/hooks";

interface AddCertificationFormProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCertificationForm = (props: AddCertificationFormProps) => {
  const auth = useAppSelector((state) => state.auth);

  const [certification, setCertification] = useState<CertificationEntry>({
    organization: "",
    name: "",
    url: "",
    issueDate: getFormattedDate(getCurrentDate()),
    expiryDate: "",
    firebaseUid: auth.userId || "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCertification((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    certificationsService.create(certification);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Organization"
          name="organization"
          value={certification.organization}
          onChange={handleInputChange}
        />
        <TextField
          label="Name"
          name="name"
          value={certification.name}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="URL"
          name="url"
          value={certification.url}
          onChange={handleInputChange}
        />
        <TextField
          label="Issue Date"
          name="issueDate"
          type="date"
          value={certification.issueDate}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Expiry Date"
          name="expiryDate"
          type="date"
          value={certification.expiryDate}
          onChange={handleInputChange}
        />
        <Stack direction="row" spacing={5}>
          <Button type="submit" variant="contained" color="secondary">
            Save
          </Button>
          <Button
            onClick={() => props.setShowForm(false)}
            variant="contained"
            color="info"
          >
            Close
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default AddCertificationForm;
