import axios from './axios';

export const getCategorias = axios.get(`/categorias/getCategorias`);
export const deleteCategoria =  (id: number) => axios.delete(`/categorias/deleteCategoria/${id}`);
export const postCategoria = (nombre:string) => axios.post(`/categorias/addCategoria/${nombre}`);
