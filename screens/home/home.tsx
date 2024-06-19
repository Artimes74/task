import React from 'react'
import {StyleSheet, View} from 'react-native'
import AmountAndGlass from "@/screens/home/components/amountAndGlass/amountAndGlass";
import Cards from "@/screens/home/components/cards/cards";
import useHome from "@/screens/home/useHome";
import {homePageStyle} from "@/screens/home/homePageStyle";
import {useDerivedValue, useSharedValue} from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {MAX_HEIGHT} from "@/utils/constant";

const Home = () => {
    const {getCardsData, resolveData, cardOnPressHandler, plusHandler, minesHandler} = useHome()
    const [amount, setAmount] = React.useState<number>(0);
    const translateY = useSharedValue(0)


    React.useEffect(() => {
        resolveData()
    }, [])

    React.useEffect(() => {
        translateY.value = -(MAX_HEIGHT * amount) / 100
    }, [amount])


    return (
        <View style={homePageStyle.container}>
            <AmountAndGlass amount={amount} translateY={translateY}/>
            <Cards
                data={getCardsData}
                onPress={cardOnPressHandler}
                plusAction={plusHandler}
                minesAction={minesHandler}
                setAmount={setAmount}
            />
        </View>
    );
};
export default Home;

