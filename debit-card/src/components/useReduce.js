const initialState = {card: {front: 0, back: 180}, num: '################', name: 'name', month: 'MM', year: 'YY', cvv: '', isActive: {number: false, name: false, expires: false}}

const reducer = (state, action) => {
    switch (action.type) {
        case 'flip':
          return {...state, card: {front: -180, back: 0}};
        case 'flop':
          return {...state, card: {front: 0, back: 180}};
          case 'number':
              return {...state, num: action.payLoad}
              case 'name':
              return {...state, name: action.payLoad}
              case 'month':
                return {...state, month: action.payLoad}
                case 'year':
                    return {...state, year: action.payLoad}
                    case 'cvv':
                        return {...state, cvv: action.payLoad}
              case 'numberActive':
                return {...state, isActive: {...state.isActive, number: true}}
                case 'nameActive':
              return {...state, isActive: {...state.isActive, name: true}}
              case 'expireActive':
              return {...state, isActive: {...state.isActive, expires: true}}
              case 'numberDeactive':
                return {...state, isActive: {...state.isActive, number: false}}
                case 'nameDeactive':
              return {...state, isActive: {...state.isActive, name: false}}
              case 'expireDeactive':
              return {...state, isActive: {...state.isActive, expires: false}}
        default:
          throw new Error();
      }
}

module.exports = {initialState, reducer}