import { bottomSheetRefProps } from "@/components/bottom/bottomSheet";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setCards } from "@/redux/reducer";
import React from "react";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

export const useAdd = () => {
  const ref = React.useRef<bottomSheetRefProps>(null);
  const [name, setName] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const getCardsData = useAppSelector((state) => state.cardsData);
  const dispatch = useAppDispatch();

  const activeSheet = () => {
    ref?.current?.scrollTo(-height * 0.6);
  };

  function getRandomIcon(name: string, min: number, max: number) {
    const iconName = ["water", "coffee", "tea"];
    switch (name) {
      case "water":
        return iconName[0];
      case "coffee":
        return iconName[1];
      case "tea":
        return iconName[2];
      default:
        const random = Math.floor(Math.random() * (max - min + 1) + min);
        return iconName[random];
    }
  }

  const onSaveHandler = () => {
    const card = {
      name: name,
      description: description,
      value: name.toLowerCase() === "coffee" ? 5 : 10,
      icon: getRandomIcon(name.toLowerCase(), 0, 2),
    };
    dispatch(setCards(card));
    setName("");
    setDescription("");
    ref?.current?.scrollTo(0);
  };

  return {
    ref,
    name,
    description,
    setName,
    getCardsData,
    setDescription,
    dispatch,
    activeSheet,
    getRandomIcon,
    onSaveHandler,
  };
};
