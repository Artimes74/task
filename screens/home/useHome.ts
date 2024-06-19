import AsyncStorage from "@react-native-async-storage/async-storage";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {empetyCards, setCards} from "@/redux/reducer";
import React from "react";
import {CARD_TYPE} from "@/type/publicTypes";

const useHome = () => {
    const dispatch = useAppDispatch()
    const getCardsData = useAppSelector(state => state.cardsData);
    const jsonValue = async () => {
        try {
            const data = await AsyncStorage.getItem('cards')
            if (data !== null) {
                return JSON.parse(data);
            } else {
                return []
            }
        } catch (error) {
            return []
        }


    }

    const resolveData = () => {
        jsonValue().then(response => {
            dispatch(empetyCards([]));
            response.map((card: CARD_TYPE) =>
                dispatch(setCards(card))
            )
        })
    }

    const cardOnPressHandler = (index: number, selectedCardIndex: number, isFocused: boolean, setSelectedCardIndex: React.Dispatch<React.SetStateAction<number>>, setIsFocused: React.Dispatch<React.SetStateAction<boolean>>) => {
        if (selectedCardIndex !== index) {
            setIsFocused(true)
            setSelectedCardIndex(index);
        } else {
            setIsFocused(!isFocused)
            setSelectedCardIndex(index);
        }
    }


    const plusHandler = React.useCallback((setAmount: React.Dispatch<React.SetStateAction<number>>, value: number, max: number) => {
        setAmount(prv => prv + value > max ? max : prv + value)
    }, [])

    const minesHandler = React.useCallback((setAmount: React.Dispatch<React.SetStateAction<number>>, value: number) => {
        setAmount(prv => prv - value < 0 ? 0 : prv - value);
    }, [])


    return {
        dispatch,
        getCardsData,
        jsonValue,
        resolveData,
        cardOnPressHandler,
        plusHandler,
        minesHandler,
    }


}

export default useHome
