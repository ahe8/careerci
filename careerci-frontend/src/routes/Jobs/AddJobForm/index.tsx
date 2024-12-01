import { useState } from "react";

import { Stack, TextField, Button } from "@mui/material";

import { getCurrentDate, getFormattedDate } from "../../../utils/utils";

interface JobState {
  date: string;
  company: string;
  position: string;
  status: string;
}

interface AddJobFormProps {
  setShowAddJobForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddJobForm = (props: AddJobFormProps) => {
  const [job, setJob] = useState<JobState>({
    date: getFormattedDate(getCurrentDate()),
    company: "",
    position: "",
    status: "Applied",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJob((prevState: JobState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    console.log(event.target);
    console.log(job);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Date Applied"
            type="date"
            name="date"
            value={job.date}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Company"
            name="company"
            value={job.company}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Position"
            name="position"
            value={job.position}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Status"
            name="status"
            value={job.status}
            onChange={handleInputChange}
            required
          />
          <Stack direction="row" spacing={5}>
            <Button type="submit" variant="contained" color="secondary">
              Save
            </Button>
            <Button onClick={() => props.setShowAddJobForm(false)} variant="contained" color="info">
              Close
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default AddJobForm;
