import {CARD_TYPE} from "@/type/publicTypes";
import React from "react";

export type HOME_CARD_TYPE = {
    onPress: (index: number, selectedCardIndex: number, isFocused: boolean, setSelectedCardIndex: React.Dispatch<React.SetStateAction<number>>, setIsFocused: React.Dispatch<React.SetStateAction<boolean>>) => void
    index: number;
    isFocused: boolean;
    selectedCardIndex: number;
    card: CARD_TYPE
    setSelectedCardIndex: React.Dispatch<React.SetStateAction<number>>
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
    setAmount: React.Dispatch<React.SetStateAction<number>>
    plusAction: (setAmount: React.Dispatch<React.SetStateAction<number>>, value: number, max: number) => void;
    minesAction: (setAmount: React.Dispatch<React.SetStateAction<number>>, value: number) => void
};

export type HOME_CARDS_TYPE = {
    data: CARD_TYPE[]
    onPress: (index: number, selectedCardIndex: number, isFocused: boolean, setSelectedCardIndex: React.Dispatch<React.SetStateAction<number>>, setIsFocused: React.Dispatch<React.SetStateAction<boolean>>) => void
    plusAction: (setAmount: React.Dispatch<React.SetStateAction<number>>, value: number, max: number) => void;
    minesAction: (setAmount: React.Dispatch<React.SetStateAction<number>>, value: number) => void
    setAmount: React.Dispatch<React.SetStateAction<number>>
}
