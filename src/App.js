import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as ACTIONS from './store/hook/actions';
import * as Reducer1 from './store/hook/reducer';

const App = () => {
  const [ sGlobal, setStateGlobal ] = useState(0);
  const [stateContext, dispatchContext] = useReducer(Reducer1.HookReducer, Reducer1.initialState)
  const [globalState, globalDispatch] = useReducer(Reducer1.HookReducer, Reducer1.initialState)

  const incGlobalState = () => {
    setStateGlobal(sGlobal + 1);
  }

  const decGlobalState = () => {
    setStateGlobal(sGlobal - 1);
  }

  const handleCtxDispatchSuccess  = () => {
    dispatchContext(ACTIONS.success())
  };

  const handleCtxDispatchFailure  = () => {
    dispatchContext(ACTIONS.failure())
  };

  const handleUserReducerChange = (e) => {
    globalDispatch(ACTIONS.user_input_change(e.target.value))
  }

  const handleUserReducerSubmit = (e) => {
      e.preventDefault();
      e.persist();
      globalDispatch(ACTIONS.user_input_submit(e.target.useContext.value))
  }

    return(
      <div>
      React
      <Context.Provider
        value={{
          gValue: sGlobal,
          incGlogal: () => incGlobalState(),
          decGlobal: () => decGlobalState(),

          gState: stateContext,
          gSuccess: () => handleCtxDispatchSuccess(),
          gFailure: () => handleCtxDispatchFailure(),

          useContextChange: globalState.user_text_change,
          useContextSubmit: globalState.user_text_submit,
          useHandleChange: (e) => handleUserReducerChange(e),
          useHandleSubmit: (e) => handleUserReducerSubmit(e),
        }}
      >
      <Routes />
      </Context.Provider>
      </div>
    )
}


export default App;
