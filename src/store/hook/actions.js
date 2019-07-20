import * as ACTION_TYPES from '../actions/action_types'

export const success = () => {
    return {
        type: ACTION_TYPES.SUCCESS
    }
}
  
export const failure = () => {
    return {
        type: ACTION_TYPES.FAILURE
    }
}

export const user_input_change = (text) => {
    return {
        type: ACTION_TYPES.USER_INPUT_CHANGE,
        payload: text
    }
}
  
export const user_input_submit = (text) => {
    return {
        type: ACTION_TYPES.USER_INPUT_SUBMIT,
        payload: text
    }
}
