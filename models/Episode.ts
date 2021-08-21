interface Character {
  id: string;
  name: string;
}

interface Episode {
  id: string;
  name: string;
  episode: string;
  characters: Character[];
}

export default Episode;
