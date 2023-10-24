import axios from './axios';

export const getPrestacion = (id: number) => axios.get(`/prestaciones/getPrestacion/${id}`);

export const getPrestaciones = axios.get(`/prestaciones/getPrestaciones`);