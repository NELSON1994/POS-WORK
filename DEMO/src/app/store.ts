import { Pos } from './pos';
import { ADD_POS, TOGGLE_POS, REMOVE_POS, REMOVE_ALL_POS } from './actions';

export interface IAppState {
    pos: Pos[];
    lastUpdate: Date;
}
export const INITIAL_STATE: IAppState = {
    pos: [],
    lastUpdate: null
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_POS:
            action.p.id = state.pos.length + 1;    
            return Object.assign({}, state, {
                pos: state.pos.concat(Object.assign({}, action.p)),
                lastUpdate: new Date()
            })
        
        case REMOVE_POS:
            return Object.assign({}, state, {
                pos: state.pos.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            })
        case REMOVE_ALL_POS:
            return Object.assign({}, state, {
                pos: [],
                lastUpdate: new Date()
            })
    }
    return state;
}
