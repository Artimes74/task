import React from 'react'
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import BottomSheet, {bottomSheetRefProps} from "@/components/bottom/bottomSheet";

const {width, height} = Dimensions.get("screen");

type Props<T extends boolean> = {
    children: JSX.Element | JSX.Element[];
    bottomSheet: T extends true ? {
        ref: bottomSheetRefProps
        name: string
        description: string
        setName: React.Dispatch<React.SetStateAction<string>>
        setDescription: React.Dispatch<React.SetStateAction<string>>
        onSave: () => void;
    } : false;
};
const Container = (props: Props<boolean>) => {
    const {children, bottomSheet} = props
    return (

        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>

    );
};
export default Container;
const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});
