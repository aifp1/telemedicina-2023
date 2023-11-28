import axios from './axios';

export const getCategorias = axios.get(`/categorias/getCategorias`);
export const deleteCategoria = (id: number) => axios.delete(`/categorias/deleteCategoria/${id}`);