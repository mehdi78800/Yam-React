import { SET_NB_THROW, SHOW_DICE, ADD_YAM } from '../constants/actions';
import randomDice from '../utils/randomDice';
import calculateStats from '../utils/calculateStats';

const stateInit = {
    nb_throw: 0,
    result: [],
    stats: {
        yam: 0,
        carre: 0,
        brelan: 0,
        double_paire: 0,
        paire: 0
    }
}

const reducer = (state = stateInit, action = {}) => {

    const { nb_throw, result, stats } = state;

    switch (action.type) {


        case SET_NB_THROW:
            const throwns = action.payload;

            return {
                ...state,
                nb_throw: throwns
            }

        case SHOW_DICE:

            return {
                ...state,
                result: randomDice(nb_throw),
            }

        case ADD_YAM:


            return {
                ...state,
                stats: calculateStats(result, stats),
            }

        default:
            return state;
    }
}

export default reducer;