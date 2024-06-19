import {Dimensions, StyleSheet} from 'react-native'
import {SPACE} from "@/utils/constant";

const {width} = Dimensions.get('screen');

export const homePageCardStyle = StyleSheet.create({
    card: {
        width: width * 0.2,
        height: '63%',
        justifyContent: "center",
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#212121',
        backgroundColor: "white",
        marginHorizontal: SPACE,
        borderRadius: SPACE,
        alignSelf: 'center'
    },
})
