import React from 'react'
import {ScrollView, View} from 'react-native'
import Card from "@/screens/home/components/card/card";
import {homePageCardsStyle} from "@/screens/home/components/cards/homePageCardsStyle";
import {HOME_CARDS_TYPE} from "@/type/homePage/homePageTypes";


const Cards = (props: HOME_CARDS_TYPE) => {
    const {data, setAmount, onPress, plusAction, minesAction} = props
    const [isFocused, setIsFocused] = React.useState(false)
    const [selectedCardIndex, setSelectedCardIndex] = React.useState(0)

    return (
        <View style={homePageCardsStyle.container}>
            {data.map((eachCard, index) => (
                <Card
                    key={index}
                    card={eachCard}
                    isFocused={isFocused}
                    index={index}
                    selectedCardIndex={selectedCardIndex}
                    onPress={onPress}
                    setIsFocused={setIsFocused}
                    setSelectedCardIndex={setSelectedCardIndex}
                    plusAction={plusAction}
                    minesAction={minesAction}
                    setAmount={setAmount}
                />
            ))}
        </View>
    );
};


export default Cards;

