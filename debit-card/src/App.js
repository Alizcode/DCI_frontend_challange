import CardFront from './components/CardFront'
import CardBack from './components/CardBack';
import Inputs from './components/Inputs'
import { useReducer } from 'react'
import {reducer, initialState} from './components/useReduce'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  const appStyle = {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: '0.75rem',
    backgroundColor: '#ddeefc',
    height: '40rem',
  }
  return (
    <div style={appStyle}>
      <div style={{width: '80%'}}>
        <CardFront state={state} dispatch={dispatch} />
        <CardBack state={state} dispatch={dispatch} />
      </div>
        <Inputs state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
