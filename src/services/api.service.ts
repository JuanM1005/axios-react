import type { User, UseApiCall } from "../models";
import { loadAbort } from "../utilities";
import { createAxios } from "./axios.service";
import { BASE_URL } from "@/constants";

const api = createAxios(BASE_URL);

/** Prepara (sin ejecutar) el GET de un personaje; devuelve `call` + `controller`
 *  para que useApi decida cuándo awaitar y pueda cancelarlo si hace falta. */
export const getUsers = (): UseApiCall<User[]> => {
  const controller = loadAbort();

  return {
    call: api.get<User[]>(`/users`, { signal: controller.signal }),
    controller,
  };
};

export const getUser = (id: number): UseApiCall<User> => {
  const controller = loadAbort();

  return {
    call: api.get<User>(`/users/${id}`, { signal: controller.signal }),
    controller,
  };
};

export const deleteUser = (id: number): UseApiCall<void> => {
  const controller = loadAbort();

  return {
    call: api.delete<void>(`/users/${id}`, { signal: controller.signal }),
    controller,
  };
};
