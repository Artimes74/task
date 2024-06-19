import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'
import {CARD_TYPE} from "@/type/publicTypes";

// Define a type for the slice state
interface CounterState {
    cardsData: CARD_TYPE[]
}

// Define the initial state using that type
const initialState: CounterState = {
    cardsData: [],
}

export const userReducer = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setCards: (state, action: PayloadAction<CARD_TYPE>) => {
            // @ts-ignore
            state.cardsData.push(action.payload);
        },
        empetyCards: (state, action: PayloadAction<[]>) => {
            state.cardsData = []
        }
    },
})

export const {setCards, empetyCards} = userReducer.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cardsData.values()

export default userReducer.reducer
