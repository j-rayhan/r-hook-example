import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  name: "Hook initial State",
  user_text_change: '',
  user_text_submit: ''
}

export const HookReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.SUCCESS:
        return {
          ...state,
          name: "I am Hook Reducer"
        }
      case ACTION_TYPES.FAILURE:
        return {
          ...state,
          ...initialState
        }
      case ACTION_TYPES.USER_INPUT_CHANGE:
        return {
          ...state,
          user_text_change: action.payload
        }
      case ACTION_TYPES.USER_INPUT_SUBMIT:
        return {
          ...state,
          user_text_submit: action.payload
        }
      default:
        return state
    }
}
