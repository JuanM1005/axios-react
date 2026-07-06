import type { AxiosResponse } from "axios";

/** Contrato de las funciones de servicio (ej. getCharacter): agrupa la promesa
 *  de la petición y su controller para que useApi pueda awaitar o cancelar. */
export interface UseApiCall<T> {
  /** Resuelve con la respuesta completa de axios; useApi extrae `.data`. */
  call: Promise<AxiosResponse<T>>;

  /** `controller.abort()` cancela `call` (axios lanza un CanceledError). */
  controller: AbortController;
}
