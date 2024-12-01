export interface User {
  id: string;
  firebaseUid: string;
}

export interface Certification {
  id: number;
  organization: string;
  name: string;
  url: string;
  issueDate: string;
  expiryDate: string;

    firebaseUid: string;

}

export interface Job {
  id: number;
  dateApplied: string;
  company: string;
  position: string;
  status: string;
  user: {
    firebaseUid: string;
  };
}

export type UserEntry = Omit<User, "id">;
export type CertificationEntry = Omit<Certification, "id">;
export type JobEntry = Omit<Job, "id">;
