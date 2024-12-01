import axios from "axios";
import { Certification, CertificationEntry } from "../types/types";

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/certifications`;

const getAll = async (userId: string) => {
  const request = await axios.get(`${baseUrl}/${userId}`);
  return request.data;
};

const create = async (certification: CertificationEntry) => {
  const { data } = await axios.post<Certification>(baseUrl, certification);
  return data;
};

export default { getAll, create };
