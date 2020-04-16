import { USER_PAGE_LOADED, USER_PAGE_UNLOADED } from '../constants/actionTypes';

export default (state = {}, action:any) => {
    switch (action.type) {
        case USER_PAGE_LOADED:
            return {
                ...state,
                tags: action.payload[0].tags
            };
        case USER_PAGE_UNLOADED:
            return {};
        default:
            return state;
    }
};
