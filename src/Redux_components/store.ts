import { composeWithDevTools } from "@redux-devtools/extension"
import { createStore } from "redux"
import type { AnyAction } from "redux"
import { HAPPY_CLICKED, SAD_CLICKED } from "./action"


type moment = {
    intensity: number,
}

export type Store = {
    happycount: moment[],
    sadcount: moment[],
}

const initailState ={
    happycount: [], 
    sadcount: [],
}

function reducer (currentState: Store = initailState, action: AnyAction): Store {

    switch (action.type) {

        case HAPPY_CLICKED: 
            return {...currentState, happycount: [...currentState.happycount, {intensity: action.playload}]};
        case  SAD_CLICKED:
            return {...currentState, happycount: [...currentState.sadcount, {intensity: action.playload}]};

        default: 
            return currentState

    }
}

const store = createStore(reducer, composeWithDevTools())

export default store;