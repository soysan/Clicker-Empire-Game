
export function Reducer(state, action) {
  const effect = action.item.effect;
  const amount = action.amount;
  const times = action.times;
  const max = action.item.maxVal;

  switch (action.type) {
    case 'ability':
      return ({
        ...state,
        money: state.money - amount,
        addPerClick: state.addPerClick += effect * times,
      }, {
        ...action.item,
        maxVal: max - times,
      })
    case 'realEstate':
      return ({
        ...state,
        money: state.money - amount,
        addPerSec: state.addPerSec + effect * times,
      }, {
        ...action.item,
        maxVal: max - times,
      })
    default:
      state.money -= amount;
      const name = action.item.name;
      if (name === 'ETF Stock') {
        action.item.price += Math.floor(action.item.price * 0.1 * action.times);
        let total = 0;
        for (let i = 0; i < action.times; i++) {
          total += parseInt(action.item.price * Math.pow(1 + effect, i));
        }
        state.addPerSec += total;
        state.stock += times;
      } else {
        state.addPerSec += effect * times;
      }
  }
}
