import axios from './axios';

export const getPrestacionMedico = (id: any) => axios.post(`/prestacionesMedico/getPrestacionMedico`, id);
