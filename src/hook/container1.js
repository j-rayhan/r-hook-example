import React, { useState, useEffect, useReducer, useContext } from 'react';
import * as Reducer from '../store/hook/reducer'
import * as Action from '../store/hook/actions'
import Context from '../utils/context';

const HookContainer1 = () => {
  const context = useContext(Context);
  // const value = useState(0)[0]
  // const setValue = useState(0)[1]
  const [ value, setValue ] = useState(0);
  const [ useEffectvalue, setUseEffectValue ] = useState(undefined);

  const [ state, dispatch ] = useReducer(Reducer.HookReducer, Reducer.initialState);

  useEffect(() => {
    setTimeout(() => setUseEffectValue("Use effect after 3s"), 3000);
  },[value]);

  const incValue = () => {
    setValue(value + 1);
  }

  const decValue = () => {
    setValue(value - 1);
  }

  const changeUseEffect = () => {
    setUseEffectValue("Use effect new Value");
  }

  const handleDispatchSuccess  = () => {
    dispatch(Action.success())
  };

  const handleDispatchFailure  = () => {
    dispatch(Action.failure())
  };

    return(
      <div>
        <button onClick={() => incValue()}>INC LOCAL STATE(+)</button>
        <button onClick={() => decValue()}>DEC LOCAL STATE(-)</button>
        <button onClick={() => changeUseEffect()}>Change use effect</button>
        <button onClick={() => handleDispatchSuccess()}>Hook Reducer Success</button>
        <button onClick={() => handleDispatchFailure()}>Hook Reducer Failure</button>
        <br/>
        <br/>

        <button onClick={() => context.incGlogal()}>INC Global STATE(+)</button>
        <button onClick={() => context.decGlobal()}>DEC Global STATE(-)</button>

        <br/>
        <br/>

        <button onClick={() => context.gSuccess()}>Ctx Success</button>
        <button onClick={() => context.gFailure()}>Ctx Failure</button>

      <div>
      {
        useEffectvalue 
        ? useEffectvalue
        : "No value"
      }
    <br />
    <br />
        Local STATE: {value}
      </div>
      <br/>
      <br/>
      <br/>
      <div>
      {state.name}
      </div>
      <br/>
      <br/>
      <br/>
      Global State : {context.gValue}
      <br/>
      <br/>
      <br/>
      Global Reducer State : {context.gState.name}
      </div>
    )
}


export default HookContainer1;