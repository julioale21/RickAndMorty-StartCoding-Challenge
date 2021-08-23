import Character from "./Character";

interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
}

export default Location;
