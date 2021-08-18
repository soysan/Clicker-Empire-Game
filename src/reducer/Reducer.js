
export function Reducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        count: state.count + 1
      }
    case 'RESET':
      return {
        ...state,
        count: 0,
      }
    case 'OPEN_ITEM':
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    default:
      return state;
  }
}
