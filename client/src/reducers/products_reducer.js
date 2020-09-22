import {
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL
} from '../actions/types';


export default function(state={},action){
  switch(action.type){
      case GET_PRODUCTS_BY_SELL:
          return {...state}
      case GET_PRODUCTS_BY_ARRIVAL:
          return { ...state}
      default:
          return state;
  }
}