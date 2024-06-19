import React from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import iconDrawer from "@/hooks/iconDrawer";
import {SharedValue} from "react-native-reanimated";

const SPACE = 10;

type Props = {
    value: number;
    setAmount: React.Dispatch<React.SetStateAction<number>>;
    plusAction: (setAmount: React.Dispatch<React.SetStateAction<number>>, value: number, max: number) => void;
    minesAction: (setAmount: React.Dispatch<React.SetStateAction<number>>, value: number) => void
};
const FocusButtons = (props: Props) => {
    const {value, setAmount, plusAction, minesAction} = props
    return (

        <View style={[{
            width: "100%",
            height: '100%',
            position: "absolute",
            justifyContent: "center",
            alignItems: 'center',
        }]}>
            <Pressable style={styles.plusButton} onPress={() => {
                plusAction(setAmount, value, 100);
            }}>
                {iconDrawer('plus', '100%', '100%')}
            </Pressable>
            <Pressable style={styles.minusButton} onPress={() => {
                minesAction(setAmount, value)
            }}>
                {iconDrawer('mines', '100%', '100%')}
            </Pressable>
        </View>

    );
};
export default FocusButtons;
const styles = StyleSheet.create({
    plusButton: {
        width: SPACE * 3,
        height: 40,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: -SPACE * 4.2
    },
    minusButton: {
        width: SPACE * 3,
        height: 20,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: -SPACE * 2.8
    }
});
