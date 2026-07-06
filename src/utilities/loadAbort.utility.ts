/** Crea un AbortController nuevo, centralizado aquí para facilitar el testeo. */
export const loadAbort = () => {
  return new AbortController();
};
