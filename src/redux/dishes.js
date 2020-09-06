import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMessL: null, dishes: action.payload};     //return immutable 

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMessL: null, dishes: []}; 

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMessL: action.payload, dishes: []};

        default:
            return state;
    }
}