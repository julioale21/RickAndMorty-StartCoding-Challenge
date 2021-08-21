import Episode from "./Episode";
import Origin from "./Origin";

interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: Episode;
}

export default Character;
