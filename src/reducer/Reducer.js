
export function Reducer(state, action) {
  const item = action.item;
  const amount = action.amount;
  const times = action.times;
  const max = action.item.maxVal;

  switch (action.type) {
    case 'ability':
      return ({
        ...state,
        money: state.money -= amount,
        addPerClick: state.addPerClick += item.effect * times,
        ...item,
        maxVal: max - times,
      })
    case 'realEstate':
      return ({
        ...state,
        money: state.money -= amount,
        addPerSec: state.addPerSec += item.effect * times,
        ...item,
        maxVal: max - times,
      })
    default:
      state.money -= amount;
      const name = item.name;
      if (name === 'ETF Stock') {
        item.price += Math.floor(item.price * 0.1 * times);
        let total = 0;
        for (let i = 0; i < action.times; i++) {
          total += parseInt(action.item.price * Math.pow(1 + item.effect, i));
        }
        state.addPerSec += total;
        state.stock += times;
      } else {
        state.addPerSec += Math.floor(state.stock * item.effect * times);
      }
  }
}
