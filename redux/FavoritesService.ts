const LOCAL_STORAGE_ITEM = "FAVORITES_CHARACTERS";

class FavoritesService {
  public static loadState() {
    try {
      const serializedItems = localStorage.getItem(LOCAL_STORAGE_ITEM);

      console.log(serializedItems);

      if (serializedItems === null) {
        return [];
      }

      return JSON.parse(serializedItems);
    } catch (error) {
      return [];
    }
  }

  public static saveState(favoritesCharacters) {
    console.log(favoritesCharacters);
    try {
      const serializedItems = JSON.stringify(favoritesCharacters);

      localStorage.setItem(LOCAL_STORAGE_ITEM, serializedItems);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
}

export default FavoritesService;
