import {View, StyleSheet, StatusBar} from "react-native";
import Route from '../route/main'
import {Provider} from "react-redux";
import {store} from "@/redux/store";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Container from "@/components/container/container";
import BottomSheet from "@/components/bottom/bottomSheet";

export default function () {
    return (
        <Provider store={store}>
            <GestureHandlerRootView style={styles.gesture}>
                <StatusBar barStyle={'dark-content'}/>
                <Route/>
            </GestureHandlerRootView>
        </Provider>
    )
}

const styles = StyleSheet.create({
    gesture: {
        flex: 1,
    },

})

