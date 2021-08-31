interface Character {
  id: string;
  name: string;
  image: string;
}

interface Episode {
  id: string;
  name: string;
  episode: string;
  air_date: string;
  characters: Character[];
}

export default Episode;
