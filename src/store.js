
export const initialStore=()=>{
  return{
    characters: [],
    planets: [],
    vehicles: [],
    favorites: [],
    selectedFavorite: null
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'SET_DATA':
      const { characters, planets, vehicles } = action.payload;
      return {
        ...store,
        characters,
        planets,
        vehicles
      };  

    case 'ADD_FAVORITE':
      const favoriteToAdd = action.payload;
      return {
        ...store,
        favorites: [...store.favorites, favoriteToAdd]
      };

    case 'SELECT_FAVORITE':
      return {
        ...store,
        selectedFavorite: action.payload
      };

    case 'CLEAR_SELECTED_FAVORITE':
      return {
        ...store,
        selectedFavorite: null
      };
      
    case 'REMOVE_FAVORITE':
      const favoriteToRemove = action.payload;
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav._id !== favoriteToRemove._id),
        selectedFavorite:
          store.selectedFavorite?._id === favoriteToRemove._id
            ? null
            : store.selectedFavorite
      };

    default:
      throw Error('Unknown action.');
  }    
}
