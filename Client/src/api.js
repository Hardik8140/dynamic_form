import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const createForm = (data) => API.post("/forms", data);
export const getForms = () => API.get("/forms");
export const getFormById = (id) => API.get(`/forms/${id}`);
export const submitForm = (data) => API.post("/forms/submit", data);
export const deleteForm = (id) => API.delete(`/forms/${id}`);
