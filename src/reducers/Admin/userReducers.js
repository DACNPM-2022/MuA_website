export default function usersReducer(state, { type, payload }) {
    switch (type) {
      case "init_users":
        return {
          items: payload.items,
          filter: payload.filter,
        };
      
      case "add_users":
        return {
          ...state,
          items: [...state.items, payload],
        };
  
      
      case "filter_due":
        return {
          ...state,
          filter: payload,
        };
        case "filter_success":
        return {
          ...state,
          filter: payload,
        };
      case "complete_task":
        return {
          ...state,
          items: state.items.map(function (i) {
            if (i.id === payload) return { ...i, complete: true };
  
            return i;
          }),
        };
  
      default:
        return state;
    }
  }
  
  export const initialState = {
    items: [],
   
    filter:"all"
  };
  