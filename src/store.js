import { getVehicles } from "./services/starWarsApi";

export const initialStore=()=>{
  return{
    characters: [],
    planets: [],
    vehicles: [],
    favorites: []
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
      
    case 'REMOVE_FAVORITE':
      const favoriteToRemove = action.payload;
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav._id !== favoriteToRemove._id)
      };

    default:
      throw Error('Unknown action.');
  }    
}
