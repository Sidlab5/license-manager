import { SET_PROFILE } from './actiontypes';
import {Base} from '../components/API/Base';



export const setProfile = (userProfile) => {
    return {
        type: SET_PROFILE,
       userProfile
    }
}

export const login = (userInfo) => {
    return dispatch => {
        Base.post('users/login', userInfo)
        .then(response => {
            dispatch(setProfile(response.data.data));
        })
        .catch(err => { 
            console.log(err);
        
        });
    };
};
