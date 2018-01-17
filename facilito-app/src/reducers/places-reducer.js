export default function placesReducer(action, state = []){
  switch(action.type) {
    case 'LOAD_PLACES':
      return action.places;
    
    default:
      return state;
  }
}
