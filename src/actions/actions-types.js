import {
    SET_NB_THROW,
    SHOW_DICE,
    ADD_YAM
} from '../constants/actions';


export const set_nb_throw = payload => {
    return {
        type: SET_NB_THROW, payload
    };
}

export const show_dice = payload => {
    return {
        type: SHOW_DICE
    };
}

export const add_yam = payload => {
    return {
        type: ADD_YAM

    };
}