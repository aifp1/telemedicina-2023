import axios from './axios';

export const getHorario = (id: number) => axios.get(`/horarios/getHorario/${id}`);
export const getHoras = (id:number, fecha:string) => axios.get(`/horarios/getHoras/${id}/${fecha}`);

export const getHorarios = axios.get(`/horarios/getHorarios`);