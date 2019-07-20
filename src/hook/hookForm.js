import React, { useState, useReducer, useContext } from 'react';
import * as ACTION from '../store/hook/actions';
import * as UserReducer from '../store/hook/reducer';
import Context from '../utils/context';

const HookForm = props => {
    const context = useContext(Context);
    const [vChange, setVchange ] = useState(undefined);
    const [vSubmit, setVsubmit ] = useState('');
    const [userState, userDispatch] = useReducer(UserReducer.HookReducer, UserReducer.initialState);

    const handleVchage = (e) => {
        setVchange(e.target.value)
    }

    const handleVsubmit = (e) => {
        e.preventDefault();
        setVsubmit(e.target.useState.value)
    }

    const handleUserReducerChange = (e) => {
        userDispatch(ACTION.user_input_change(e.target.value))
    }

    const handleUserReducerSubmit = (e) => {
        e.preventDefault();
        userDispatch(ACTION.user_input_submit(e.target.useReducer.value))
    }

    return (
        <div>
            <form onSubmit={handleVsubmit}>
                <label>React useState: </label>
                <input id='useState' type='text' onChange={handleVchage} />
                <button type="submit"> Submit </button>
            </form>
            <div>
                <h2>React State: </h2>
                <p>Change: {vChange}</p>
                <p>Submit: {vSubmit}</p>
            </div>
            <br/>
            <br/>
            <hr/>
            <form onSubmit={handleUserReducerSubmit}>
                <label>React useReducer: </label>
                <input id='useReducer' type='text' onChange={handleUserReducerChange} />
                <button type="submit"> Submit </button>
            </form>
            <div>
                <h2>React Reducer: </h2>
                <p>Change: {userState.user_text_change}</p>
                <p>Submit: {userState.user_text_submit}</p>
            </div>

            <br/>
            <br/>
            <hr/>
            <form onSubmit={context.useHandleSubmit}>
                <label>React useReducer: </label>
                <input id='useContext' type='text' onChange={context.useHandleChange} />
                <button type="submit"> Submit </button>
            </form>
            <div>
                <h2>React Reducer: </h2>
                <p>Change: {context.useContextChange}</p>
                <p>Submit: {context.useContextSubmit}</p>
            </div>
        </div>
    )
}

export default HookForm;
