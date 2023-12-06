import axios from './axios';

export const addPaciente = (paciente: any) => axios.post(`/paciente/addPaciente`, paciente);