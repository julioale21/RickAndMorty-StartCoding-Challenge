import { FETCH_CHARACTERS, FETCH_CHARACTER_BY_ID } from "../apollo/queries/characters";
import client from "../apollo/client";
import Character from "../models/Character";
import IInfo from "../interfaces/IInfo";

interface PaginatedCharacters {
  characters: Character[];
  info: IInfo;
}

class CharacterService {
  static async fetchCharacters(page?: number, name?: string): Promise<PaginatedCharacters> {
    const { data } = await client.query({
      query: FETCH_CHARACTERS,
      variables: {
        page,
        filter: {
          name,
        },
      },
    });

    return {
      characters: data.characters.results,
      info: data.characters.info,
    };
  }

  static async fetchCharacterById(id: string): Promise<Character> {
    const { data } = await client.query({
      query: FETCH_CHARACTER_BY_ID,
      variables: {
        id,
      },
    });

    return data.character;
  }
}

export default CharacterService;
