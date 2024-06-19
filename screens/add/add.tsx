import React, {useRef} from 'react'
import {Dimensions, FlatList, Pressable, StyleSheet, Text, TextInput, View} from 'react-native'
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {setCards} from "@/redux/reducer";
import BottomSheet, {bottomSheetRefProps} from "@/components/bottom/bottomSheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import iconDrawer from "@/hooks/iconDrawer";
import Container from "@/components/container/container";

const {width, height} = Dimensions.get('screen')

const SPACE = 10;
const Add = () => {
    const [name, setName] = React.useState<string>('')
    const [description, setDescription] = React.useState<string>('')
    const getCardsData = useAppSelector(state => state.cardsData);
    const dispatch = useAppDispatch();
    const ref = useRef<bottomSheetRefProps>(null)
    const activeSheet = () => {
        ref?.current?.scrollTo(-height * 0.6)
    }


    function getRandomIcon(name: string, min: number, max: number) {
        const iconName = ['water', 'coffee', 'tea'];
        switch (name) {
            case 'water':
                return iconName[0];
            case 'coffee':
                return iconName[1];
            case 'tea':
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
            value: name.toLowerCase() === 'coffee' ? 5 : 10,
            icon: getRandomIcon(name.toLowerCase(), 0, 2)
        }
        dispatch(setCards(card));
        setName('');
        setDescription('');
        ref?.current?.scrollTo(0);
    }


    React.useEffect(() => {
        AsyncStorage.setItem('cards', JSON.stringify(getCardsData)).then(r => {
        });
    }, [getCardsData])


    return (
        <>
            <BottomSheet ref={ref} name={name} description={description} setName={setName}
                         setDescription={setDescription} onSave={onSaveHandler}/>
            <View style={styles.container}>
                <View style={styles.titleCard}>
                    <Text style={styles.text}>Recourses</Text>
                </View>
                <Pressable style={styles.button} onPress={() => {
                    activeSheet()
                }}>
                    <Text style={styles.buttonText}>Add New Recourse</Text>
                </Pressable>
                <View style={styles.listContainer}>
                    <FlatList data={getCardsData} keyExtractor={(_, index) => index.toString()}
                              showsVerticalScrollIndicator={false} bounces={false} renderItem={({item, index}) => {
                        return <RenderItem card={item} lastItem={index === getCardsData.length - 1}/>
                    }}/>
                </View>
            </View>
        </>
    );
};


type Props = {
    card: { name: string, description: string, icon: string }
    lastItem: boolean;
}

const RenderItem = (props: Props) => {
    const {card, lastItem} = props
    return (
        <View style={[styles.card, {marginBottom: lastItem ? SPACE * 20 : 0}]}>
            <View style={styles.iconAndTextContainer}>
                {iconDrawer(card.icon, '19%', '80%')}
                <View style={{marginHorizontal: SPACE * 2}}>
                    <Text style={{color: '#212121', fontSize: 16, marginBottom: SPACE / 4}}>{card.name}</Text>
                    <Text style={{color: '#818181'}}>{card.description}</Text>
                </View>
            </View>
            <View>
            </View>
        </View>
    )
}

export default Add;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: SPACE * 2,
        backgroundColor: 'white',
    },
    titleCard: {
        width: '90%',
        alignSelf: 'center',
        height: 80,
        backgroundColor: '#fff',
        borderRadius: SPACE,
        justifyContent: 'center',
        alignItems: 'center',
        padding: SPACE,
        elevation: 5,
        shadowOpacity: 0.7,
        shadowColor: '#a9a9a9',
        shadowOffset: {
            width: 0, height: 4
        },
        margin: SPACE,
    },
    text: {
        color: "#212121",
        fontWeight: 'bold',
        fontSize: 17,
    },
    button: {
        width: '70%',
        height: 60,
        borderRadius: SPACE,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: '#0A8080',
        paddingLeft: SPACE * 2,
        marginTop: SPACE * 2,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#0A8080',
    },
    listContainer: {
        width: '100%',
        justifyContent: 'center',
        marginTop: SPACE * 2,
    },
    card: {
        width: '90%',
        alignSelf: 'center',
        height: 80,
        backgroundColor: '#fff',
        borderRadius: SPACE,
        flexDirection: 'row',
        alignItems: 'center',
        padding: SPACE,
        elevation: 5,
        shadowOpacity: 0.7,
        shadowColor: '#a9a9a9',
        shadowOffset: {
            width: 0, height: 4
        },
        margin: SPACE,
    },
    iconAndTextContainer: {
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: SPACE / 4
    }

});
