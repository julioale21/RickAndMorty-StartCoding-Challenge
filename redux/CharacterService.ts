import { FETCH_CHARACTERS } from "../apollo/queries/characters";
import client from "../apollo/client";

class CharacterService {
  static async fetchCharacters(page?: number) {
    const { data } = await client.query({
      query: FETCH_CHARACTERS,
      variables: {
        page,
      },
    });

    return data.characters.results;
  }
}

export default CharacterService;
