import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "@/screens/home/home";
import Add from "@/screens/add/add";
import {HomeIcon} from "@/assets/iconPack/bottomPack";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {SPACE} from "@/utils/constant";
import {Text} from "react-native";

type BOTTOM_NAVIGATION_TYPE = {
    home: undefined;
    add: undefined;
}

const BottomStack = createBottomTabNavigator<BOTTOM_NAVIGATION_TYPE>();


export default () => (
    <BottomStack.Navigator screenOptions={{
        headerShown: false
    }}>
        <BottomStack.Screen name="home" component={Home} options={{
            tabBarLabel: () => {
                return (<Text></Text>)
            },
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons width={50} height={50} name="home" color={color} size={50} style={{
                    marginTop: SPACE * 4
                }}/>
            )
        }}/>
        <BottomStack.Screen name="add" component={Add}
                            options={{
                                tabBarLabel: () => {
                                    return (<Text></Text>)
                                },
                                tabBarIcon: ({color, size}) => (
                                    <MaterialCommunityIcons width={50} height={50} name="plus" color={color}
                                                            size={50}
                                                            style={{
                                                                marginTop: SPACE * 4
                                                            }}/>
                                )
                            }}
        />
    </BottomStack.Navigator>
)
