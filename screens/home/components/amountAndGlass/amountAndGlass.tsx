import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Animated, {SharedValue, useAnimatedStyle, withTiming} from "react-native-reanimated";
import {MAX_HEIGHT} from "@/utils/constant";

type Props = {
    amount: number;
    translateY: SharedValue<number>;
};

const SPACE = 10;
const AmountAndGlass = (props: Props) => {
    const {amount, translateY} = props;

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateY: withTiming(translateY.value)}],
            borderBottomLeftRadius: translateY.value === 0 ? 10 : 0,
            borderBottomRightRadius: translateY.value === 0 ? 10 : 0,
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{amount}%</Text>
            <View style={[styles.glass]}>
                <View style={{width: '100%', height: MAX_HEIGHT - 7, overflow: "hidden"}}>

                    <Animated.View style={[styles.innerGlass, rStyle]}/>
                </View>
            </View>
        </View>
    );
};
export default AmountAndGlass;
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: '70%',
        justifyContent: "center",
        alignItems: 'center',
    },
    text: {color: 'black', fontWeight: 'bold', fontSize: 35, marginVertical: SPACE},
    glass: {
        width: '40%',
        height: MAX_HEIGHT,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderWidth: 4,
        overflow: 'hidden'
    },
    innerGlass: {
        width: "100%",
        height: "100%",

        bottom: 0,
        position: 'absolute',
        backgroundColor: 'white'
    }

});
