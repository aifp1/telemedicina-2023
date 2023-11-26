import axios from './axios';

// export const login = (user: any) => axios.post(`/auth/login`, user);
export const getMedicos = axios.get(`/medico/getMedicos`);
export const getMedico = (id: number) => axios.get(`/medico/getMedico/${id}`);
export const addMedico = (user: any) => axios.post(`/medico/getMedicos`, user);

