import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { UseApiCall } from "@/models";

/** Dato devuelto por la API; `null` hasta la primera respuesta. */
type Data<T> = T | null;
type ErrorType = Error | null;

/** Forma del objeto que el hook expone al componente. */
interface UseApiResult<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
  fetch: () => Promise<void>;
  setData: Dispatch<SetStateAction<Data<T>>>;
}

/** `autoFetch: true` dispara la petición al montar el componente. */
interface UseApiOptions {
  autoFetch?: boolean;
}

/** Hook genérico que encapsula el ciclo de una llamada a la API
 *  (petición → loading → datos/error → cancelación al desmontar).
 *  `apiCall` es una factory: cada fetch() crea un request fresco con su propio AbortController. */
export const useApi = <T>(
  apiCall: () => UseApiCall<T>,
  options?: UseApiOptions,
): UseApiResult<T> => {
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>(null);

  // Ref (no estado): cancelar el request en curso no debe disparar un re-render.
  const controllerRef = useRef<AbortController | null>(null);

  const fetch = useCallback(async (): Promise<void> => {
    setLoading(true);

    // La factory se invoca aquí (no en el render) para que cada fetch() cree
    // un request nuevo con su propio AbortController.
    const { call, controller } = apiCall();
    controllerRef.current = controller;

    try {
      const response = await call;

      setData(response.data);
      setError(null);
    } catch (error) {
      // Ignora la cancelación: no es un error de la API.
      if (error instanceof Error && error.name === "CanceledError") return;

      setError(
        error instanceof Error ? error : new Error("Error desconocido."),
      );
    } finally {
      // Evita actualizar estado si el componente ya desmontó (abort en curso).
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, [apiCall]);

  useEffect(() => {
    if (options?.autoFetch) {
      (async () => {
        await fetch();
      })();
    }

    // Cancela la petición en vuelo al desmontar (o si fetch/autoFetch cambian).
    return () => controllerRef.current?.abort();
  }, [options?.autoFetch, fetch]);

  return { data, loading, error, fetch, setData };
};
