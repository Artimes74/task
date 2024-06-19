import { StyleSheet, Text, View } from "react-native";
import React from "react";
import iconDrawer from "@/hooks/iconDrawer";
import { SPACE } from "@/utils/constant";

type Props = {
  card: { name: string; description: string; icon: string };
  lastItem: boolean;
};

const RenderItem = (props: Props) => {
  const { card, lastItem } = props;
  return (
    <View style={[styles.card, { marginBottom: lastItem ? SPACE * 20 : 0 }]}>
      <View style={styles.iconAndTextContainer}>
        {iconDrawer(card.icon, "19%", "80%")}
        <View style={{ marginHorizontal: SPACE * 2 }}>
          <Text
            style={{ color: "#212121", fontSize: 16, marginBottom: SPACE / 4 }}
          >
            {card.name}
          </Text>
          <Text style={{ color: "#818181" }}>{card.description}</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignSelf: "center",
    height: 80,
    backgroundColor: "#fff",
    borderRadius: SPACE,
    flexDirection: "row",
    alignItems: "center",
    padding: SPACE,
    elevation: 5,
    shadowOpacity: 0.7,
    shadowColor: "#a9a9a9",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    margin: SPACE,
  },
  iconAndTextContainer: {
    width: "50%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: SPACE / 4,
  },
});
