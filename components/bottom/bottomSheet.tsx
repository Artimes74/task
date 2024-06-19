import React, {useImperativeHandle} from 'react'
import {Dimensions, Pressable, StyleSheet, Text, TextInput, View} from 'react-native'
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import Animated, {
    useAnimatedProps,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming
} from "react-native-reanimated";

const {width, height} = Dimensions.get('screen')

const MAX_TRANSLATE_Y = height;
const SPACE = 10

export type bottomSheetRefProps = {
    scrollTo: (destination: number) => void;
    isActive: () => boolean;
}

type bottomSheetProps = {
    name: string;
    description: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    onSave: () => void;
};


const BottomSheet = React.forwardRef<bottomSheetRefProps,
    bottomSheetProps>((props, ref) => {
    const {name, description, setName, setDescription, onSave} = props
    const translateY = useSharedValue(0);
    const context = useSharedValue({y: 0});
    const active = useSharedValue(false);

    const scrollTo = React.useCallback(
        (destination: number) => {
            'worklet';
            active.value = destination !== 0;
            translateY.value = withSpring(destination, {damping: 50});

        },
        [active.value, translateY.value],
    );

    const isActive = React.useCallback(() => {
        return active.value;
    }, [active.value]);

    useImperativeHandle(ref, () => ({scrollTo, isActive}), [scrollTo, isActive]);

    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = {y: translateY.value};
        })
        .onUpdate(event => {
            translateY.value = event.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
        })
        .onEnd(() => {
            // if (translateY.value > -height / 3) {
            //     scrollTo(0);
            // } else if (translateY.value < -height / 1.5) {
            //     scrollTo(MAX_TRANSLATE_Y);
            // }
        });

    const bottomSheetAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateY: translateY.value}],
        };
    });

    const backDropAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(active.value ? 1 : 0),
        };
    });

    const animatedBackDropProps = useAnimatedProps(() => {
        return {
            pointerEvents: active.value ? 'auto' : 'none',
        } as any;
    }, []);

    const cancel = () => {
        scrollTo(0)
    }

    return (
        <>
            <Animated.View
                onTouchStart={() => {
                    scrollTo(0);
                }}
                animatedProps={animatedBackDropProps}
                style={[
                    StyleSheet.absoluteFillObject,
                    {backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 2},
                    backDropAnimatedStyle,
                ]}
            />
            <GestureDetector gesture={gesture}>
                <Animated.View
                    style={[
                        styles.container,
                        {backgroundColor: 'white', zIndex: 2},
                        bottomSheetAnimatedStyle,
                    ]}>
                    <View style={styles.line}/>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder={'Title'} placeholderTextColor={"#a8a8a8"}
                                   value={name}
                                   onChangeText={ev => {
                                       setName(ev);
                                   }}/>
                        <TextInput style={styles.input} placeholder={'Description'} placeholderTextColor={"#a8a8a8"}
                                   value={description}
                                   onChangeText={ev => {
                                       setDescription(ev)
                                   }}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={() => {
                            cancel()
                        }} style={styles.cancelButton}>
                            <Text style={styles.cancelTextButton}>cancel</Text>
                        </Pressable>
                        <Pressable style={styles.saveButton} onPress={() => {
                            onSave();
                        }}>
                            <Text style={styles.saveTextButton}>save</Text>
                        </Pressable>
                    </View>
                </Animated.View>
            </GestureDetector>

        </>

    );
});
export default BottomSheet;
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        position: 'absolute',
        borderRadius: SPACE * 3,
        top: height,
        paddingHorizontal: SPACE + SPACE / 2,
        paddingTop: SPACE * 2,
        zIndex: 5
    },
    line: {
        width: '25%',
        height: 10,
        backgroundColor: "#b9b9b9",
        borderRadius: SPACE,
        alignSelf: 'center',
        marginBottom: SPACE * 4,
    },
    inputContainer: {width: '100%', flexDirection: 'row', justifyContent: "space-between"},
    input: {
        width: '45%',
        height: 60,
        borderWidth: 1,
        borderColor: '#a8a8a8',
        borderRadius: SPACE,
        backgroundColor: "white",
        paddingLeft: SPACE * 2
    },
    buttonContainer: {
        width: '100%', flexDirection: 'row', justifyContent: "space-between", marginTop: SPACE * 4
    },
    saveButton: {
        width: '45%',
        height: 60,
        borderRadius: SPACE * 2,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#0A8080'
    },
    cancelButton: {
        borderWidth: 1,
        width: '45%',
        height: 60,
        borderRadius: SPACE * 2,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: "#0A8080",
        backgroundColor: "transparent",
    },
    saveTextButton: {
        color: 'white',
        fontSize: 18,

    },
    cancelTextButton: {
        color: '#0A8080',
        fontSize: 18,
    },

});
