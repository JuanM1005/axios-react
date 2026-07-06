/** Campos del personaje (Rick and Morty API) que el componente necesita mostrar. */
export interface Character {
  name: string;
  status: string; // "Alive", "Dead" o "unknown"
  species: string; // "Human", "Alien", etc.
  image: string; // URL de la imagen del personaje
}

/** Estado inicial de Character, para evitar valores undefined antes de la respuesta. */
export const EmptyCharacter: Character = {
  name: "",
  status: "",
  species: "",
  image: "",
};
