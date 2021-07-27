import {SET_PROFILE} from '../actions/actiontypes';

export default function profile(
    state = {
        token: null,
        user: {}
    },
    action) {
        switch (action.type) {
            case SET_PROFILE:
                return {
                    ...state,
                   token: action.userProfile.access_token,
                   user: action.userProfile.user,
                }
                default:
                     return state
        }
  }