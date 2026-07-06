import axios, { type AxiosInstance } from "axios";

/** Crea una instancia de axios con su propia baseURL, para tener múltiples
 *  clientes HTTP (distintas APIs) sin repetir configuración. */
export const createAxios = (baseURL: string): AxiosInstance => {
  return axios.create({ baseURL });
};
