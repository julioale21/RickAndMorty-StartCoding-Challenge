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

    return {
      characters: data.characters.results,
      info: data.characters.info,
    };
  }
}

export default CharacterService;
