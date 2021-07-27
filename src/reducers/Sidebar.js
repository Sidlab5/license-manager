import {SIDEBAR_CONTENT} from '../actions/actiontypes';




export default function sidebar(state = {num: null}, action) {
        switch (action.type) {
            case SIDEBAR_CONTENT:
                return {
                    ...state,
                   ...action.num
                }
                default:
                     return state
        }
  }