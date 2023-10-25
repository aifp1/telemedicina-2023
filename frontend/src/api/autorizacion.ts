import axios from './axios';

export const login = (user: any) => axios.post(`/auth/login`, user);